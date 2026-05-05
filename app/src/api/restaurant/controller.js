import promisePool from '../../utils/database.js';

const getList = async (req, res) => {
	const [result] = await promisePool.execute('SELECT * FROM meals');
	res.json(result);
};

const addFood = async (req, res) => {
	const [result] = await promisePool.execute('INSERT INTO  meals (?, ?, ?)');
	res.json(result);
};

const deleteFood = async (req, res) => {
	const [result] = await promisePool.execute('SELECT * FROM meals');
	res.json(result);
};

const getReviews = async (req, res) => {
	const [result] = await promisePool.execute('SELECT * FROM reviews');
	res.json(result);
};

const addReview = async (req, res) => {
  try {

    if (req.body.review_title == null || req.body.review_content == null) {
      return res.status(400).json({ message: "Null content" });
    }

    await promisePool.execute(
      `INSERT INTO reviews (user_id, review_title, review_content)
       VALUES (?, ?, ?)`,
      [
        res.locals.user.user_id,
        req.body.review_title,
        req.body.review_content,
      ]
    );

    res.status(201).json({ message: "Review added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const order = async (req, res) => {
	const address = await promisePool.execute(
		'INSERT INTO history (user_id, order, address_id) VALUES (?, ?, ?)',
		[
			escape.locals.user?.user_id,
			req.body.order_content,
			req.body.address_id,
		]
	);
	res.sendStatus(201);
};

const getOrderHistory = async (req, res) => {};

export {
	getList,
	getReviews,
	addReview,
	order,
	addFood,
	deleteFood,
	getOrderHistory,
};
