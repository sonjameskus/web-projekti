import express from 'express';
import {
	getList,
	getReviews,
	addReview,
	order,
	getOrderHistory,
	addFood,
	deleteFood,
	updateFood,
} from './controller.js';
import {authenticateToken} from '../../middleware/auth.js';

const router = express.Router();
router
	.route('/list')
	.get(getList)
	.post(authenticateToken, addFood)
	.delete(authenticateToken, deleteFood)
	.put(authenticateToken, updateFood);
router.route('/review').get(getReviews).post(authenticateToken, addReview);
router
	.route('/order')
	.get(authenticateToken, getOrderHistory)
	.post(authenticateToken, order);

export default router;
