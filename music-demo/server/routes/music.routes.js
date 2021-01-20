const MusicController = require("../controllers/music.controller");

module.exports = app => {
    //Get ALL
    app.get("/api/music", MusicController.findAllMusic);
    //Get ONE
    app.get("/api/music/:_id", MusicController.findOneSong);
    //Add NEW
    app.post("/api/music/new", MusicController.createSong);
    //Delete ONE song
    app.delete("/api/music/delete/:_id", MusicController.deleteSong);
    //Update ONE song
    app.put("/api/music/update/:_id", MusicController.updateSong);
}