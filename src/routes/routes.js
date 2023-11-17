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
        // Finds user in DB to test credentials on or else sends status code 500.
        let storedUser = await userModel.findOne({ username: req.body.username });
        if (storedUser === null) {
            res.status(500).send("Incorrect login credentials.");
        } else {
            let compareRes = await bcrypt.compare(req.body.password, storedUser.password);
            if (compareRes) {
                // Remove password property from user object sent back, even tho it is hashed
                res.status(200).send(storedUser);
            } else {
                res.status(500).send("Incorrect login credentials.");
            }
        }
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Incorrect credentials");
    }
}

router.createGroup = async (req, res) => {
    try {
        // groupModel.create({ groupName: req.body.groupName, groupLeader: req.body.username, })
        userModel.findOneAndUpdate({ username: req.body.username })
    } catch (e) {
        console.error(e.message);
    }
}

module.exports = router;
