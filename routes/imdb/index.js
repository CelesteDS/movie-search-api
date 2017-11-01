const imdb = require('express').Router();
const searchResult = require('./searchResult');


imdb.get('/:movieTitle', searchResult);


module.exports = imdb;
