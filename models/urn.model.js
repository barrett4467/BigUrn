const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UrnSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 300},
    keywords: {type: Array, required: true},
    inStock: {type: Number, required: true}
});

module.exports = mongoose.model("Urn", UrnSchema);