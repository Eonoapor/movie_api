const express = require('express');
const app = express();
const morgan = require ('morgan');

// Data about top 10 movies

let topTenMovies = [
{
  title: 'Time Machine',
  director: 'Simon Wells, Gore Verbinski'
},
{
  title: 'City of Angels',
  director: 'Brad Silberling'
},
{
  title: 'Planet of the Apes (2001 film)',
  director: 'Tim Burton'
},
{
  title: 'Star Trek',
  director: 'J. J. Abrams'
},
{
  title: 'Children of Men',
  director: 'Alfonso Cuarón'
},
{
  title: 'Avatar',
  director: 'James Caremon'
},
{
  title: 'The Matrix',
  director: 'Lana Wachowski, Lilly Wachowski'
},
{
  title: 'Star Wars: Episode IV - A New Hope',
  director: 'George Lucas'
},
{
  title: 'Edge of Tomorrow',
  director: 'Doug Liman'
},
{
  title: 'The Fifth Element',
  director: 'Luc Besson'
},
]


// GET routes

app.get('/movies', function(req, res) { //returns JSON object of top 10 movies
    res.json(topTenMovies)
});
app.get('/', function(req, res) {
    res.send('Movie Database Search App')
});

// Morgan middleware library for logging all requests
app.use(morgan('common'));

//get "documentation" file from public folder
app.use(express.static('public'));

//error-handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Unexpected error !');
});

//Listening for requests

app.listen(8080);
