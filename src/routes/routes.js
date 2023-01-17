'use strict';

const bcrypt = require("bcrypt");

const userModel = require("../schema/userSchema.js");

let router = {};

router.signup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        let newUser = await new userModel(req.body);
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Invalid new user");
    }
}

module.exports = router;
