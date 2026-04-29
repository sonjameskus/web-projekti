import promisePool from '../../utils/database.js';

const getList = async (req, res) => {
	const [result] = await promisePool.execute('SELECT * FROM meals');
	res.json(result);
};

const getReviews = async (req, res) => {
	const [result] = await promisePool.execute('SELECT * FROM reviews');
	res.json(result);
};

const addReview = async (req, res) => {
	await promisePool.execute(
		'INSERT INTO reviews (user_id, review_content) VALUES (?, ?)', // mitä tulee review idks ?
		[req.body.user_id, req.body.review_content]
	);
	res.sendStatus(201);
};

const getCart = (req, res) => {
	res.send({message: 'getting cart'});
	// ottaa cartin jostain
};

const addToCart = (req, res) => {
	res.send({message: 'adding to cart'});
	// laittaa jotain carttiin johonki
};

const removeFromCart = (req, res) => {
	res.send({message: 'removing from cart'});
	// poistetaan cartista
};

const order = (req, res) => {
	res.send({message: 'ordering'});
	// ???
};

export {
	getList,
	getReviews,
	addReview,
	getCart,
	addToCart,
	removeFromCart,
	order,
};
