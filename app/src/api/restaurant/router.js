import express from 'express';
import {getList, getReviews, addReview, order} from './controller.js';
import {authenticateToken} from '../../middleware/auth.js';

const router = express.Router();
router.route('/list').get(getList);
router.route('/review').get(getReviews).post(authenticateToken, addReview);
router.route('/order').post(order);

export default router;
