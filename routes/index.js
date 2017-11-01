const routes = require('express').Router();
const imdb = require('./imdb');

routes.use('/api/imdb/search', imdb);

routes.get('/api*', (req, res) => {
  res.status(200).json({ message: 'Please go to /api/imdb/search/movie+title to search for a movie' });
});

module.exports = routes;
