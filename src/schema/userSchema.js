'use strict';

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    // Testing out "unique" schematype
    username: { type: String, required: true, unique: true },
    password: { type: String, requried: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    birthday: { type: String, required: false }
});

const userModel = model('User', userSchema);

module.exports = userModel;
