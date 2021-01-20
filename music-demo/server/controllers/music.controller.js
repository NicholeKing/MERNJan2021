const Music = require("../models/music.models");

//Get ALL the Music
module.exports.findAllMusic = (req, res) => {
    Music.find()
        .then(allMusic => res.json({allMusic: allMusic}))
        .catch(err => res.json({message: "Something went wrong when grabbing all the music!", error: err}))
}

//Get ONE instance of Music
module.exports.findOneSong = (req, res) => {
    Music.findOne({_id: req.params._id})
        .then(oneSong => res.json({oneSong: oneSong}))
        .catch(err => res.json({message: "Something went wrong when grabbing one song!", error: err}))
}

//Post a NEW Song
module.exports.createSong = (req, res) => {
    Music.create(req.body)
        .then(newSong => res.json({newSong: newSong}))
        .catch(err => res.json({message: "Something went wrong when adding a song to the database!", error: err}))
}

//DELETE a Song
module.exports.deleteSong = (req, res) => {
    Music.remove({_id: req.params._id})
        .then(res.json({message: "Song was successfully removed!"}))
        .catch(err => res.json({message: "Something went wrong trying to delete a song!", error: err}))
}

//UPDATE a Song
module.exports.updateSong = (req, res) => {
    Music.updateOne({_id: req.params._id}, {
        $set: {
            title: req.body.title,
            artist: req.body.artist,
            genre: req.body.genre,
            minutes: req.body.minutes,
            seconds: req.body.seconds
        }
    }, {runValidators: true})
        .then(oneSong => res.json({oneSong: oneSong}))
        .catch(err => res.json({message: "Something went wrong trying to update a song!", error: err}))
}