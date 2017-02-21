import { Router } from 'express';

import auth from './endpoints/auth';

const router = Router();

router.use(auth);

export default router;
