const { Product } = require('../models/index');

const ProductController = {
  create: async (req, res, next) => {
    try {
      const { title, price, stock, CategoryId } = req.body;
      if (!title || !price || !stock || !CategoryId) {
        return res.status(400).json({ message: 'Data tidak boleh kosong' });
      }

      const product = await Product.create({
        title,
        price,
        stock,
        CategoryId,
      });

      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const products = await Product.findAll();
      res.status(200).json({ products });
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const { productId } = req.params;
      const product = await Product.findOne({
        where: { id: productId },
      });

      if (!product) {
        return res.status(404).json({ message: 'Product Not Found' });
      }

      res.status(200).json({ product });
    } catch (error) {}
  },

  update: async (req, res, next) => {
    try {
      const { productId } = req.params;
      const { price, stock, title } = req.body;

      if (!price || !stock || !title) {
        return res.status(400).json({ message: 'Data tidak noleh kosong' });
      }

      const findProduct = await Product.findOne({
        where: { id: productId },
      });

      if (!findProduct) {
        return res.status(404).json({ message: 'Product Not Found' });
      }

      const product = (
        await Product.update(
          { price, stock, title },
          {
            where: { id: productId },
            returning: true,
          }
        )
      )[1][0];
      res.status(200).json({ product });
    } catch (error) {
      next(error);
    }
  },

  patch: async (req, res, next) => {
    try {
      const { productId } = req.params;
      const { CategoryId } = req.body;

      const findProduct = await Product.findOne({
        where: { id: productId },
      });

      if (!findProduct) {
        return res.status(404).json({ message: 'Product Not Found' });
      }

      const product = (await Product.update({ CategoryId }, { where: { id: productId }, returning: true }))[1][0];
      res.status(200).json({ product });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { productId } = req.params;

      const findProduct = await Product.findOne({
        where: { id: productId },
      });

      if (!findProduct) {
        return res.status(404).json({ message: 'Product Not Found' });
      }

      await Product.destroy({
        where: { id: productId },
      });

      res.status(200).json({ message: 'Product has been successfully deleted' });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = ProductController;