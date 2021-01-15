const express = require("express");
const app = express();
const port = 8000;
//This brings in our faker library
const faker = require("faker");

class Person {
    constructor(){
        this.name = faker.name.findName();
        this.slug = faker.lorem.slug();
        this.mustache = faker.helpers.mustache("dfsahfdkasjh");
    }
}

class Song {
    constructor(){
        this.title = faker.random.words();
        //Genre is broken
        //this.genre = faker.music.genre();
        this.artist = faker.name.findName();
    }
}

app.get("/api", (req, res) => {
    res.json({message: "You are good to go!"});
})

app.get("/api/person", (req, res) => {
    const person = new Person();
    res.json(person);
})

app.get("/api/song", (req, res) => {
    const song = new Song();
    res.json(song);
})

app.get("/api/person/song", (req, res) => {
    const song = new Song();
    const person = new Person()
    res.json({person: person, song: song});
})

app.listen(port, () => console.log(`Good to go on port ${port}!`));