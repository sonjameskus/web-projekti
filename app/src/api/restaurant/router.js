import express from 'express';
import {getList, getReviews, addReview, order} from './controller.js';

const router = express.Router();
router.route('/list').get(getList);
router.route('/review').get(getReviews).post(addReview);
router.route('/order').post(order);

export default router;
