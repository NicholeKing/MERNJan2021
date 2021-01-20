const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Gotta have a title!"],
        minlength: [2, "Your title must be longer than that"]
    },
    artist: {
        type: String,
        required: [true, "Gotta have an artist!"],
        minlength: [2, "Your artist name must be longer than that"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required!"]
    }, 
    minutes: {
        type: Number,
        required: [true, "Minutes is required!"],
        min: [1, "Song must be at least 1 minute long!"],
        max: [59, "If it's over 59 minutes it's an hour!"]
    },
    seconds: {
        type: Number,
        required: [true, "Seconds is required!"],
        max: [59, "There are no more than 60 seconds!"]
    }
}, {timestamps: true})

const Music = mongoose.model("Music", MusicSchema);

module.exports = Music;

