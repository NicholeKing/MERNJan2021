//Calling on mongoose so we can use it and connect to the database

const mongoose = require("mongoose");

//Connect to our DB
mongoose.connect("mongodb://localhost/jan_facts_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I found the mongoose!!"))
    .catch(() => console.log("Where did the mongoose go?!"))
    