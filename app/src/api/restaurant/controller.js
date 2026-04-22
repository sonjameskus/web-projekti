const getList = (req, res) => {
    res.send({message: 'getting food list'});
};

const getReviews = (req, res) => {
    res.send({message: 'getting review list'});
};

const addReview = (req, res) => {
    res.send({message: 'adding review'});
};

const order = (req, res) => {
    res.send({message: 'ordering'});
};

export {getList, getReviews, addReview, order};
