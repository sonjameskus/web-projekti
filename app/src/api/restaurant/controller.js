import promisePool from '../../utils/database.js';
import {getAddressById, findUserById} from './model.js';

const getList = async (req, res) => {
	try {
		const [result] = await promisePool.execute('SELECT * FROM meals');
		res.status(200).json(result);
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const addFood = async (req, res) => {
	try {
		const user = await findUserById(res.locals.user.user_id);
		if (user.username != 'restaurant_manager') {
			return res.status(400).json('Not authorized');
		}

		await promisePool.execute(
			'INSERT INTO  meals (meal_type, meal_name, meal_content, allergens, price) VALUES (?, ?, ?, ?, ?)',
			[
				req.body.meal_type,
				req.body.meal_name,
				req.body.meal_content,
				req.body.allergens,
				req.body.price,
			]
		);
		res.status(200).json('Food added');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const deleteFood = async (req, res) => {
	try {
		const user = await findUserById(res.locals.user.user_id);
		if (user.username != 'restaurant_manager') {
			return res.status(400).json('Not authorized');
		}

		await promisePool.execute('DELETE FROM meals WHERE meal_id = ?', [
			req.body.meal_id,
		]);
		res.status(200).json('Food deleted');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const updateFood = async (req, res) => {
	try {
		const user = await findUserById(res.locals.user.user_id);
		if (user.username != 'restaurant_manager') {
			return res.status(400).json('Not authorized');
		}

		const [meal] = await promisePool.execute(
			'SELECT * FROM meals WHERE meal_id = ?',
			[req.body.meal_id]
		);

		if (meal.length == 0) {
			return res.status(400).json('Meal not found');
		}

		await promisePool.execute(
			'UPDATE meals SET meal_type = ?, meal_name = ?, meal_content = ?, allergens = ?, price = ? WHERE meal_id = ?',
			[
				req.body.meal_type || meal[0].meal_type,
				req.body.meal_name || meal[0].meal_name,
				req.body.meal_content || meal[0].meal_content,
				req.body.allergens || meal[0].allergens,
				req.body.price || meal[0].price,
				req.body.meal_id,
			]
		);
		res.status(200).json('Food updated');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const getReviews = async (req, res) => {
	try {
		const [result] = await promisePool.execute('SELECT * FROM reviews');
		res.status(200).json(result);
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const addReview = async (req, res) => {
	try {
		await promisePool.execute(
			`INSERT INTO reviews (user_id, review_title, review_content)
       VALUES (?, ?, ?)`,
			[
				res.locals.user.user_id,
				req.body.review_title,
				req.body.review_content,
			]
		);
		res.status(200).json('Review added');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const order = async (req, res) => {
	try {
		console.log(req.body.address);
		const address = await getAddressById(res.locals.user.user_id);
		if (address == null) {
			await promisePool.execute(
				'INSERT INTO addresses (address, user_id) VALUES (?, ?)',
				[req.body.address, res.locals.user.user_id]
			);
		}

		const newaddress = await getAddressById(res.locals.user.user_id);
		await promisePool.execute(
			'INSERT INTO history (user_id, order_content, address_id) VALUES (?, ?, ?)',
			[
				res.locals.user.user_id,
				req.body.order_content,
				newaddress.address_id,
			]
		);
		res.status(200).json('Successfully ordered');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const getOrderHistory = async (req, res) => {
	try {
		const [orders] = await promisePool.execute(
			'SELECT * FROM history WHERE (user_id) = ?',
			[res.locals.user?.user_id]
		);
		res.status(200).json(orders);
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

export {
	getList,
	getReviews,
	addReview,
	order,
	addFood,
	deleteFood,
	updateFood,
	getOrderHistory,
};
