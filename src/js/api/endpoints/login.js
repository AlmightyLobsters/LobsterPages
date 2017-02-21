import { Router } from 'express';
import auth from 'basic-auth';
import crypto from 'crypto';
import bodyParser from 'body-parser';
import { authenticate } from '../../middleware/auth';

const router = Router();

router.post('/login', (req, res) => {
    res.clearCookie('authHash');
    const user = auth(req);
    if (!user) res.sendStatus(401);
    else {
        res.cookie('authHash', crypto
            .createHmac('sha256', process.env.SHA_SECRET || config.SHA_SECRET)
            .update(`${user.name}:${user.pass}`)
            .digest('base64')
        );
        res.status(200).end();
    }
});

router.post('/perm', bodyParser.json(), authenticate(null), (req, res) => {
    res.status(202).send('Access granted');
});

export default router;
