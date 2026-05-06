import promisePool from '../../utils/database.js';
import findUserByUsername from './model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const login = async (req, res) => {
	const username = req.body.username;

	const user = await findUserByUsername(username);
	if (!user) {
		return res.status(401).json('User not found');
	}

	const match = await bcrypt.compare(req.body.password, user.password);
	if (!match) {
		return res.status(401).json('Password incorrect');
	}

	const webUser = {
		user_id: user.user_id,
		username: user.username,
		email: user.email,
		allergies: user.allergies,
	};

	const key = process.env.JWT_SECRET;
	const token = jwt.sign({user_id: user.user_id}, key, {expiresIn: '1h'});
	res.json({user: webUser, token});
};

const logout = (req, res) => {
	res.send({message: 'logging out'});
	// logouttaa
};

const signin = async (req, res) => {
	const username = req.body.username;
	const pass = req.body.password;
	const email = req.body.email;

	console.log(username);
	console.log(pass);
	console.log(email);

	if (username == null || pass == null || email == null) {
		return res.json('Invalid credentials');
	}

	const user = await findUserByUsername(username);
	if (user) {
		return res.status(401).json('User already exists');
	}

	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(pass, salt, async function (err, hash) {
			await promisePool.execute(
				'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
				[username, hash, email]
			);
		});
	});

	res.send({message: 'Account created'});
};

const getme = async (req, res) => {
	console.log('getMe', res.locals.user);
	if (res.locals.user) {
		res.json({message: 'token ok', user: res.locals.user});
	} else {
		res.sendStatus(401);
	}
};

const getAddress = async (req, res) => {
	const address = await promisePool.execute('');
};

export {login, logout, signin, getme, getAddress};
