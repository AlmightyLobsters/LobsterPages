import { Router } from 'express';
import cookieParser from 'cookie-parser';

import { getConfig } from '../../config';

import about from './endpoints/about';
import articles from './endpoints/articles';
import login from './endpoints/login';
import upload from './endpoints/upload';

const router = Router();

router.use(cookieParser(getConfig("COOKIE_SECRET")));
router.use(about);
router.use(articles);
router.use(login);
router.use(upload);

export default router;
