const UserModel = require("./../models/UserModel");
const getProduct = async (req, res, next) => {
    try {
        const user = new UserModel(0, "01733952148", "Anik Biswas", "123456");
        const data = await user.save();
        user.id = data[1];
        user.password = null;
        res.json({payload: user, success: true, message: "Request Success"})
    } catch (e) {
        console.log(e);
        next(e)
    }

};

const saveProduct = async (req, res, next) => {
    next({code: 201, message: "request success"})
};


module.exports = {
    getProduct,
    saveProduct
};