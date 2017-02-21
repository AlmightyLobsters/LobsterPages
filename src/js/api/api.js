import { Router } from 'express';

import about from './endpoints/about';
import articles from './endpoints/articles';
import login from './endpoints/login';
import upload from './endpoints/upload';

const router = Router();

router.use(about);
router.use(articles);
router.use(login);
router.use(upload);

export default router;
