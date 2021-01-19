const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FactsSchema = new mongoose.Schema({
    animal: {
        type: String
    },
    fact: {
        type: String
    }
})

const Facts = mongoose.model("Facts", FactsSchema);

module.exports = Facts;