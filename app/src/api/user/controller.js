const login = (req, res) => {
    res.send({message: 'logging in'});
};

const logout = (req, res) => {
    res.send({message: 'logging out'});
};

const signin = (req, res) => {
    res.send({message: 'creating accout'});
};

export {login, logout, signin};
