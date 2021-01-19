const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

//This is for handling post requests
app.use(express.json(), express.urlencoded({extended: true}));

//connect to my config file
require("./server/config/mongoose.config")

//connect to my routes and pass it my app
require("./server/routes/facts.routes")(app)

app.listen(port, () => console.log(`It's time to MERN on port ${port}!!`));