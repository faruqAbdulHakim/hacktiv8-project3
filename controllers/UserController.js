const { User } = require("../models");
const { hashPassword } = require("./../helpers/bcryptHelper");
const { comparePassword } = require("./../helpers/bcryptHelper");
const { sign } = require("./../helpers/jwtHelper");

const UserController = {
  register: async (req, res, next) => {
    try {
      const { full_name, password, gender, email } = req.body;
      const hashedPassword = hashPassword(password);
      const createdUser = await User.create({
        full_name,
        password,
        gender,
        email,
        role: "customer",
      });
      res.status(201).json({
        user: {
          id: createdUser.id,
          full_name: createdUser.full_name,
          email: createdUser.email,
          gender: createdUser.gender,
          balance: createdUser.balance,
          createdAt: createdUser.createdAt,
        },
      });
    } catch (error) {
      res
        .status(400)
        .json({ error: error.errors.map((error) => error.message) });
    }
  },
};

module.exports = UserController;
