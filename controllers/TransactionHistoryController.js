const { TransactionHistory, Product, User, Category } = require('../models/index');
const { toRupiah } = require('../helpers/currencyHelper');

const TransactionHistoryController = {
  create: async (req, res, next) => {
    const user = req.user;
    const { productId, quantity } = req.body;
    try {
      if (!productId || !quantity) {
        return res.status(400).json({ message: 'Data tidak boleh kosong' });
      }

      const data = await Product.findOne({
        where: { id: productId },
      });
      const customer = await User.findOne({
        where: { id: user.id },
      });
      console.log(customer.dataValues.balance);
      if (!data) {
        return res.status(404).json({ message: 'product does not exist' });
      }
      if (data.dataValues.stock < quantity) {
        return res.status(400).json({
          quantity,
          stock: data.dataValues.stock,
          message: `Stok tidak cukup untuk memproses pembelian anda`,
        });
      }
      const total_price = quantity * data.dataValues.price;
      if (customer.balance < total_price) {
        return res.status(400).json({
          harga_barang: toRupiah(data.dataValues.price),
          total_price: toRupiah(total_price),
          balance: toRupiah(customer.balance),
          message: 'Saldo tidak mencukupi untuk melakukan transaksi',
        });
      }
      await Product.update(
        {
          stock: data.dataValues.stock - quantity,
        },
        {
          where: { id: productId },
        }
      );
      await User.update(
        {
          balance: customer.dataValues.balance - total_price,
        },
        {
          where: {
            id: user.id,
          },
          hooks: false,
        }
      );
      const sold_product_amount = await Category.findOne({ where: { id: data.dataValues.CategoryId } });
      await Category.update(
        {
          sold_product_amount: sold_product_amount.sold_product_amount + quantity,
        },
        { where: { id: data.dataValues.CategoryId } }
      );
      await TransactionHistory.create({
        ProductId: productId,
        UserId: user.id,
        quantity: quantity,
        total_price: total_price,
      });
      res.status(201).json({
        message: 'You have successfully purchase the product',
        transactionBill: {
          total_price: toRupiah(total_price),
          quantity: quantity,
          product_name: data.dataValues.title,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = TransactionHistoryController;
