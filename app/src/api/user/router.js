import express from 'express';
import {login, logout, signin} from './controller.js';

const router = express.Router();
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/signin').post(signin);

export default router;
