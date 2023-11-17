'use strict';

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const { giftSchema } = require('./giftSchema.js');

const groupSchema = new Schema({
    groupName: { type: String, required: true },
    groupLeader: { type: String, required: true },
    groupUUID: { type: String, required: true, unique: true },
    giftList: [giftSchema],
});

const groupModel = model('Groups', groupSchema);

module.exports = { groupModel, groupSchema };
