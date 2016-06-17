var
  Book = require('../models/Book.js')

  module.exports = {
    index: index,
    create: create,
    show: show,
    update: update,
    destroy: destroy
  }

  function index(req, res){
    Book.find({}, function(err, books){
    if(err) return console.log(err);
    res.json(books)
    })
  }

  function create(req, res){
    Book.create(req.body, function(err, book){
      if (err) return console.log(err);
      res.json({success: true, message: "Book created! ", book: book})
    })
  }

  function show(req, res){
    Book.findById(req.params.id, function(err, book){
      if (err) return console.log(err);
      res.json({book:book})
    })
  }

function update(req, res){
  Book.findOneAndUpdate(req.params.id, req.body, function(err, book){
    if (err) return console.log(err);
    res.json({success: true, message: "Book updated! ", book: book})
  })
}

function destroy(req, res){
  Book.findByIdAndRemove(req.params.id, function(err, book){
  if(err) return console.log(err);
  res.json({success: true, book:book})
  })
}
