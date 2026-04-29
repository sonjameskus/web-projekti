import express from 'express';
import {login, logout, signin, getme} from './controller.js';

const router = express.Router();
router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/signin').post(signin);
router.route('/getme').get(getme);

export default router;
