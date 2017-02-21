import { Router } from 'express';
import fs from 'fs';
import fileUpload from 'express-fileupload';

const router = Router();

router.post('/upload', authenticate('ADMIN'), fileUpload(), (req, res) => {
    const file = req.files.file;
    if(!fs.existsSync(join(publicPath, 'upload'))) fs.mkdirSync(join(publicPath, 'upload'));
    if(!file) res.status(400).send('File not attached');
    else {
        while(fs.existsSync(join(publicPath, 'upload', file.name))) {
            const splitPattern = /(?:(.+?)(\d+)?)\.(\w{2,4})/i;
            const [,name, index, ext] = splitPattern.exec(file.name);
            file.name = `${name}${Number(index) ? Number(index) + 1 : 1}.${ext}`;
        }
        fs.writeFile(join(publicPath, 'upload', file.name), file.data, err => {
            if (err) res.status(500).send(err);
            else res.status(201).location(`/upload/${file.name}`).send(file);
        });
    }
});

export default router;
