const imdb = require('express').Router();
const searchResult = require('./searchResult');


imdb.get('/search/:movieTitle', searchResult);



module.exports = imdb;
