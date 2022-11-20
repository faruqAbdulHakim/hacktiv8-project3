const categoryRouter = require('express').Router();
const CategoryController = require('../controllers/CategoryController');
const auth = require('../middlewares/auth');

categoryRouter.post('/', auth, CategoryController.create);
categoryRouter.get('/', auth, CategoryController.findAll);
categoryRouter.patch('/:categoryId', auth, CategoryController.update);
categoryRouter.delete('/:categoryId', auth, CategoryController.delete);

module.exports = categoryRouter;
