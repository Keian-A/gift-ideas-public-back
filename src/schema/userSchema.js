'use strict';

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const { groupSchema } = require('./groupSchema.js');

const userSchema = new Schema({
    // Testing out "unique" schematype
    username: { type: String, required: true, unique: true },
    password: { type: String, requried: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    birthday: { type: String, required: false },
    groups: [groupSchema],
});

const userModel = model('User', userSchema);

module.exports = userModel;
