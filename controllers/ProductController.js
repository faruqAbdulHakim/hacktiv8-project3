const { Product } = require('../models/index');

const ProductController = {
  create: async (req, res, next) => {
    try {
      const { title, price, stock, CategoryId } = req.body;
      if (!title || !price || !stock || !CategoryId) throw { name: 'BadRequest' };
      const product = await Product.create({
        title,
        price,
        stock,
        CategoryId,
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

module.exports = ProductController;
