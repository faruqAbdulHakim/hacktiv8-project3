const productRouter = require('express').Router();
const ProductController = require('../controllers/ProductController');

productRouter.post('/', ProductController.create);
productRouter.get('/', (req, res) => {
  res.status(200).json('get all');
});
productRouter.put('/:productId', (req, res) => {
  res.status(200).json('update');
});
productRouter.patch('/:productId', (req, res) => {
  res.status(200).json('update');
});
productRouter.delete('/:productId', (req, res) => {
  res.status(200).json('update');
});

module.exports = productRouter;
