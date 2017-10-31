const routes = require('express').Router();
const imdb = require('./imdb');

routes.get('/api', (req, res) => {
  res.status(200).json({message: 'Connected!'})
})

routes.use('/api/imdb', imdb);

module.exports = routes;
