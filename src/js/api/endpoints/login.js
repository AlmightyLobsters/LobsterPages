import { Router } from 'express';
import { sign } from 'cookie-signature';
import { OK, UNAUTHORIZED, ACCEPTED } from 'http-status-codes';
import auth from 'basic-auth';
import crypto from 'crypto';
import bodyParser from 'body-parser';
import { authenticate } from '../../middleware/auth';
import { getConfig } from '../../../config';

const router = Router();

const { SHA_SECRET, COOKIE_SECRET } = getConfig(["SHA_SECRET", "COOKIE_SECRET"]);

router.post('/login', (req, res) => {
    res.clearCookie('authHash');
    const user = auth(req);
    if (!user) res.sendStatus(UNAUTHORIZED);
    else {
        res.cookie('authHash', `s:${sign(
            crypto
                .createHmac('sha256', SHA_SECRET)
                .update(`${user.name}:${user.pass}`)
                .digest('base64'),
            COOKIE_SECRET)}`);
        res.status(OK).end();
    }
});

router.post('/perm', bodyParser.json(), authenticate(null), (req, res) => {
    res.status(ACCEPTED).send('Access granted');
});

export default router;
