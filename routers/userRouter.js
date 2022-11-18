const usersRouter = require("express").Router();
const UserController = require('../controllers/UserController');

usersRouter.post("/register", UserController.register);
usersRouter.post("/login", (req, res) => {
  res.status(200).json("login");
});
usersRouter.put("/:userId", (req, res) => {
  res.status(200).json("update");
});
usersRouter.delete("/:userId", (req, res) => {
  res.status(200).json("delete");
});
usersRouter.patch("/topup", (req, res) => {
  res.status(200).json("topup");
});

module.exports = usersRouter;
