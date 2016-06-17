var
  express = require('express'),
  userRouter = express.Router()
  userCtrl = require('../controllers/books.js')

bookRouter.route('/')
  .get(userCtrl.index)
  .post(userCtrl.create)

bookRouter.route('/:id')
  .get(bookCtrl.show)
  .patch(bookCtrl.update)
  .delete(bookCtrl.destroy)

module.exports = bookRouter
