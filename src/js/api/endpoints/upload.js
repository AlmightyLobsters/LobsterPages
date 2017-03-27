import { Router } from 'express';
import fs from 'fs';
import fileUpload from 'express-fileupload';
import { join } from 'path';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, CREATED } from 'http-status-codes';
import { authenticate } from '../../middleware/auth';
import { getConfig } from '../../../config';

const PUBLIC_PATH = getConfig('PUBLIC_PATH');

const router = Router();

router.post('/upload', authenticate('ADMIN'), fileUpload(), (req, res) => {
    const file = req.files.file;
    if(!fs.existsSync(join(PUBLIC_PATH, 'upload'))) fs.mkdirSync(join(PUBLIC_PATH, 'upload'));
    if(!file) res.status(BAD_REQUEST).send('File not attached');
    else {
        while(fs.existsSync(join(PUBLIC_PATH, 'upload', file.name))) {
            const splitPattern = /(?:(.+?)(\d+)?)\.(\w{2,4})/i;
            const [,name, index, ext] = splitPattern.exec(file.name);
            file.name = `${name}${Number(index) ? Number(index) + 1 : 1}.${ext}`;
        }
        fs.writeFile(join(PUBLIC_PATH, 'upload', file.name), file.data, err => {
            if (err) res.status(INTERNAL_SERVER_ERROR).send(err);
            else res.status(CREATED).location(`/upload/${file.name}`).send(file);
        });
    }
});

export default router;
