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
			return res.status(400).json('Password incorrect');
		}

		const webUser = {
			user_id: user.user_id,
			username: user.username,
			email: user.email,
			allergies: user.allergies,
		};

		const key = process.env.JWT_SECRET;
		const token = jwt.sign({user_id: user.user_id}, key, {expiresIn: '1h'});
		res.status(200).json({user: webUser, token});
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

const logout = (req, res) => {
	res.json({message: 'logging out'});
	// logouttaa
};

const signin = async (req, res) => {
	try {
		const username = req.body.username;
		const pass = req.body.password;
		const email = req.body.email;

		const user = await findUserByUsername(username);
		if (user) {
			return res.status(400).json('User already exists');
		}

		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(pass, salt, async function (err, hash) {
				await promisePool.execute(
					'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
					[username, hash, email]
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
	if (res.locals.user) {
		res.status(200).json({user: res.locals.user});
	} else {
		res.status(400).json('Not logged in');
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
		const [address] = await promisePool.execute(
			'SELECT * FROM addresses WHERE user_id = ?',
			[res.locals.user.user_id]
		);

		if (address.length != 0) {
			return res.status(401).json('Address already added');
		}

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

const updateAddress = async (req, res) => {
	try {
		await promisePool.execute(
			'UPDATE addresses SET address = ? WHERE user_id = ?',
			[req.body.address, res.locals.user.user_id]
		);
		res.status(200).json('Address updated');
	} catch (err) {
		console.error(err);
		res.status(500).json(err.message);
	}
};

export {login, logout, signin, getme, getAddress, addAddress, updateAddress};
