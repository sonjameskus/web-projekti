import express from 'express';
import {
	login,
	logout,
	signin,
	getme,
	getAddress,
	addAddress,
	updateAddress,
} from './controller.js';
import {authenticateToken} from '../../middleware/auth.js';

const router = express.Router();
router.route('/login').post(login);
router.route('/logout').post(authenticateToken, logout);
router.route('/signin').post(signin);
router.route('/me').get(authenticateToken, getme);
router
	.route('/address')
	.get(authenticateToken, getAddress)
	.post(authenticateToken, addAddress)
	.put(authenticateToken, updateAddress);

export default router;
