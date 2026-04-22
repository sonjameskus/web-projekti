import express from 'express';
import userrouter from './user/router.js';
import restaurantrouter from './restaurant/router.js';

const router = express.Router();
router.use('/user', userrouter);
router.use('/restaurant', restaurantrouter);

export default router;
