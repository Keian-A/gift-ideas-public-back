'use strict';

const bcrypt = require("bcrypt");

const userModel = require("../schema/userSchema.js");

let router = {};

router.signup = async (req, res) => {
    try {
        let existingCheck = await userModel.findOne({ username: req.body.username });
        if (!existingCheck) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            let newUser = await userModel.create(req.body);
            // Sending created user, should I send WHOLE group here?
            // ALSO -- TODO: Need to think about how groups are connected in the DB
            res.status(200).send(newUser);
        } else {
            res.status(500).send("Please choose a different username.");
        }
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Invalid new user");
    }
}

router.login = async (req, res) => {
    try {
        let storedUser = await userModel.findOne({ username: req.body.username });
        if (storedUser === null) {
            res.status(500).send("Incorrect login credentials.");
        }
        console.log(storedUser);
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Incorrect credentials");
    }
}

module.exports = router;
