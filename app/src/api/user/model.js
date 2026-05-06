import promisePool from '../../utils/database.js';

const findUserByUsername = async (username) => {
	if (username == null) {
		return null;
	}

	const [search] = await promisePool.execute(
		'SELECT * FROM users WHERE username = ?',
		[username]
	);

	if (search.length == 0) {
		return null;
	}

	console.log(search[0]);
	return search[0];
};

export default findUserByUsername;
