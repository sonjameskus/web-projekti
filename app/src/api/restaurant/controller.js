import promisePool from '../../utils/database.js';

const getList = async (req, res) => {
    const [result] = await promisePool.execute('SELECT * FROM meals');
    res.send(result);
};

const getReviews = async (req, res) => {
    const [result] = await promisePool.execute('SELECT * FROM reviews');
    res.send(result);
};

const addReview = (req, res) => {
    res.send({message: 'adding review'});
    // laittaa databaseen uuden listan
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
