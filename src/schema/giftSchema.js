'use strict';

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const giftSchema = new Schema({
    giftAsker: { type: String, required: true },
    giftName: { type: String, required: true },
    giftLink: { type: String, required: true },
    // Name of person buying gift
    buyer: { type: String, required: false },
    // Boolean to determine if gift is chosen by a buyer, need to set default to false
    bought: { type: Boolean, required: true },
    // OPTIONAL inputs for user asking for gift to narrow what they want
    size: { type: Number, required: false },
    color: { type: String, required: false },
    description: { type: String, required: false },
});

const giftModel = model('Gifts', giftSchema);

module.exports = { giftModel, giftSchema };
