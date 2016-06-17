var
  express = require('express'),
  app = express(),
  port = 3000,
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/susan-class-group-practice', function(err) {
  if(err) {
    return console.log(err);
  } else {
    console.log('Connected to MongoDB (susan-class-group-practice)');
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/api/businesses', businessRoutes);

app.listen(port, function(err) {
  if(err) return console.log(err)
  console.log('Server running on', port);
});
