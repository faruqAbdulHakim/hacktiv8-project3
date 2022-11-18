const usersRouter = require("express").Router();

usersRouter.post("/register", (req, res) => {
  res.status(201).json("register");
});
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
