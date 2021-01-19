//This is where my routes are

//What is a route?
//ex: localhost:8000/api/facts -> route that gets all facts
const FactsController = require("../controllers/facts.controller")

module.exports = app => {
    //This is the route that gets ALL the facts
    app.get("/api/facts", FactsController.findAllFacts);
    app.post("/api/facts/new", FactsController.createFact)
}