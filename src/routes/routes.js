'use strict';

const bcrypt = require("bcrypt");

const userModel = require("../schema/userSchema.js");

let router = {};

router.signup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        let newUser = await new userModel(req.body);
        // Sending created user, should I send WHOLE group here?
        // ALSO -- TODO: Need to think about how groups are connected in the DB
        res.status(200).send(newUser);
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Invalid new user");
    }
}

module.exports = router;
