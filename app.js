const express = require('express');
const routes = require('./routes');

const app = express();

// Connect all routes
app.use(routes);

// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
