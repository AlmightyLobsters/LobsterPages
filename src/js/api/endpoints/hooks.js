import { Router } from 'express';
import { OK, BAD_REQUEST } from 'http-status-codes';
import { getConfig } from '../../../config';

const VERIFY_TOKEN = getConfig('FACEBOOK_VERIFY_TOKEN');

let router = Router();

router.get('/hooks/facebook', (req, res) => {
    const { hub: { mode, challange, verify_token }} = req.query;
    if (mode === 'subscribe' && verify_token === VERIFY_TOKEN)
        res.status(OK).send(challange);
    else res.status(BAD_REQUEST).send('Invalid request. Bro, y u no facebook?!');
});

router.post('/hooks/facebook', (req, res) => {
    console.log(req.body);
    res.status(OK).end();
});

export default router;
