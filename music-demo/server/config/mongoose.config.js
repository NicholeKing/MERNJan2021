//Sets up our configuration with mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/music_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("I found the mongoose!"))
    .catch(err => console.log("I lost the mongoose!", err))