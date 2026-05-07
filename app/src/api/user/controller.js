import promisePool from '../../utils/database.js';
import findUserByUsername from './model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const login = async (req, res) => {
	try {
		const username = req.body.username;

		const user = await findUserByUsername(username);
		if (!user) {
			return res.status(400).json('User not found');
		}

		const match = await bcrypt.compare(req.body.password, user.password);
		if (!match) {
			return res.status(400).json({message: 'Password incorrect'});
		}

		const webUser = {
			user_id: user.user_id,
			username: user.username,
			email: user.email,
			allergies: user.allergies,
		};

		const key = process.env.JWT_SECRET;
		const token = jwt.sign(
			{
				user_id: user.user_id,
				username: user.username,
				email: user.email,
			},
			key,
			{expiresIn: '1h'}
		);
		res.status(200).json({user: webUser, token});
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const signin = async (req, res) => {
	try {
		const user = await findUserByUsername(req.body.username);
		if (user) {
			return res.status(400).json('User already exists');
		}

		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(req.body.password, salt, async function (err, hash) {
				await promisePool.execute(
					'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
					[req.body.username, hash, req.body.email]
				);
			});
		});
		res.status(200).json('Account created');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const getme = async (req, res) => {
	try {
		const [addresses] = await promisePool.execute(
			'SELECT * FROM addresses WHERE user_id = ?',
			[res.locals.user.user_id]
		);

		const [reviews] = await promisePool.execute(
			'SELECT * FROM reviews WHERE user_id = ?',
			[res.locals.user.user_id]
		);

		const [history] = await promisePool.execute(
			'SELECT * FROM history WHERE user_id = ?',
			[res.locals.user.user_id]
		);

		res.status(200).json({
			username: res.locals.user.username,
			email: res.locals.user.email,
			addresses: addresses,
			reviews: reviews,
			history: history,
		});
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const getAddress = async (req, res) => {
	try {
		const [address] = await promisePool.execute(
			'SELECT * FROM addresses WHERE user_id = ?',
			[res.locals.user.user_id]
		);
		res.status(200).json(address);
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const addAddress = async (req, res) => {
	try {
		await promisePool.execute(
			'INSERT INTO addresses (address, user_id) VALUES (?, ?)',
			[req.body.address, res.locals.user.user_id]
		);
		res.status(200).json('Address added');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const deleteAddress = async (req, res) => {
	try {
		await promisePool.execute(
			'DELETE FROM addresses WHERE address_id = ?',
			[req.body.address_id]
		);
		res.status(200).json('Address updated');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const updateAddress = async (req, res) => {
	try {
		await promisePool.execute(
			'UPDATE addresses SET address = ? WHERE address_id = ?',
			[req.body.address, res.body.address_id]
		);
		res.status(200).json('Address updated');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

export {
	login,
	signin,
	getme,
	getAddress,
	addAddress,
	deleteAddress,
	updateAddress,
};
