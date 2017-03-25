import { Router } from 'express';
import cookieParser from 'cookie-parser';

import { getConfig } from '../../config';

import about from './endpoints/about';
import articles from './endpoints/articles';
import hooks from './endpoints/hooks';
import login from './endpoints/login';
import upload from './endpoints/upload';

const router = Router();

router.use(cookieParser(getConfig("COOKIE_SECRET")));
router.use(about);
router.use(articles);
router.use(hooks);
router.use(login);
router.use(upload);

export default router;
