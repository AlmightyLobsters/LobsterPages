import { Router } from 'express';
import { OK } from 'http-status-codes';

const router = Router();

router.get('/about', (req, res) => {
    res.status(OK).send('Hello');
});

export default router;
