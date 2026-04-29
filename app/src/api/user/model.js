import promisePool from '../../utils/database.js';

const findUserByUsername = async (username) => {
    const [search] = await promisePool.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
    );

    if (search.length == 0) {
        return null;
    }

    return search[0];
};

export default findUserByUsername;
