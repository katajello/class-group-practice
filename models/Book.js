var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bookSchema = new Schema ({title: {type: String, required: true}
    , author: {type: String, required: true}
    , category: {type: String}
    , pageCount: {type: Number}
  })

var Book = mongoose.model('Book', bookSchema)
  module.exports = Book
