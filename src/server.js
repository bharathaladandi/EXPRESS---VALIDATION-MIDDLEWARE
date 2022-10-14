const express = require('express');
const Validation = require("./Middleware/Validation.middleware");

// file system
const fs = require('fs');

// reading movies.json file
let dbFile = fs.readFileSync(`${__dirname}/../movies.json`, {encoding: 'utf8'});
const db = JSON.parse(dbFile);
let movies = db.movies;

// updating Json file
let updateDb = (update) =>{
    fs.writeFileSync(`${__dirname}/../movies.json`,JSON.stringify(update), { encoding: 'utf8' });
}

const app = express();
app.use(express.json())
// app.use( Validation);

// get movies
app.get("/movies", (req, res)=>{
    res.send(movies);
});

//  post movies
app.post("/movies", (req, res)=>{
    let movie = req.body;
    movies.push(movie);
    updateDb({...db, movies})
    res.send(movies);
});


app.listen(8090, ()=>{
    console.log("listening on port 8090");
})