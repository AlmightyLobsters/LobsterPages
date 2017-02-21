import { Router } from 'express';

const router = Router();

router.get('/about', (req, res) => {
    res.status(200).send('Hello');
});

export default router;
