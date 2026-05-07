import promisePool from '../../utils/database.js';

const getAddressById = async (user_id) => {
	if (user_id == null) {
		return null;
	}

	const [search] = await promisePool.execute(
		'SELECT * FROM addresses WHERE user_id = ?',
		[user_id]
	);

	if (search.length == 0) {
		return null;
	}

	return search[0];
};

const findUserById = async (user_id) => {
	if (user_id == null) {
		return null;
	}

	const [search] = await promisePool.execute(
		'SELECT * FROM users WHERE user_id = ?',
		[user_id]
	);

	if (search.length == 0) {
		return null;
	}

	return search[0];
};

export {getAddressById, findUserById};
