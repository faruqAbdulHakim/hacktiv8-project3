const transactionRouter = require('express').Router();
const transactionHistoryController = require('../controllers/TransactionHistoryController');
const auth = require('../middlewares/auth');

transactionRouter.post('/', auth, transactionHistoryController.create);
transactionRouter.get('/user', (req, res) => {
  res.status(200).json('get user');
});
transactionRouter.get('/admin', (req, res) => {
  res.status(200).json('get admin');
});
transactionRouter.get('/:transactionId', (req, res) => {
  res.status(200).json('get by id');
});

module.exports = transactionRouter;
