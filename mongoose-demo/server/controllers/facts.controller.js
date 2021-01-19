//This is where our logic happens
const Facts = require("../models/facts.model");

module.exports.findAllFacts = (req, res) => {
    //We will get all the animal facts and return it as JSON
    Facts.find()
        .then(allFacts => res.json({facts: allFacts}))
        .catch(err => res.json({message: "Oh no! Something went wrong!", error: err}))
}

module.exports.createFact = (req, res) => {
    Facts.create(req.body)
        .then(newFact => res.json({fact: newFact}))
        .catch(err => res.json({message: "Something went wrong with creating your fact!", error: err}))
}