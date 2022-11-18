const { User } = require('../models');

const UserController = {
  register: async (req, res, next) => {
    try {
      const { full_name, password, gender, email } = req.body;
      const createdUser = await User.create({
        full_name,
        password,
        gender,
        email,
        role: 'customer',
      });
      res.status(201).json({user: {
        id: createdUser.id,
        full_name: createdUser.full_name,
        gender: createdUser.gender,
        balance: createdUser.balance,
        createdAt: createdUser.createdAt,
      }})
    } catch (error) {
      // TODO: updated soon
      res.status(400).json({error: error.errors.map((error) => error.message)})
    }
  }
};

module.exports = UserController;
