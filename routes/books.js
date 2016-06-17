var
  express = require('express'),
  bookRouter = express.Router(),
  bookCtrl = require('../controllers/books.js')

bookRouter.route('/')
  .get(bookCtrl.index)
  .post(bookCtrl.create)

bookRouter.route('/:id')
  .get(bookCtrl.show)
  .patch(bookCtrl.update)
  .delete(bookCtrl.destroy)

module.exports = bookRouter
