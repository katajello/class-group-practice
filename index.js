var
  express = require('express'),
  app = express(),
  port = 3000,
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  ejs = require('ejs'),
  ejsLayouts = require('express-ejs-layouts'),
  bookRoutes = require('./routes/books.js');

mongoose.connect('mongodb://localhost/susan-class-group-practice', function(err) {
  if(err) {
    return console.log(err);
  } else {
    console.log('Connected to MongoDB (susan-class-group-practice)');
  }
});
app.set('view engine', 'ejs')


// Application-wide middleware:

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(ejsLayout)
app.use(express.static('.public'))
app.use('/api/books', bookRoutes);

app.listen(port, function(err) {
  if(err) return console.log(err)
  console.log('Server running on', port);
});
