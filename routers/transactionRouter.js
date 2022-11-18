const transactionRouter = require("express").Router();

transactionRouter.post("/", (req, res) => {
  res.status(201).json("create");
});
transactionRouter.get("/user", (req, res) => {
  res.status(200).json("get user");
});
transactionRouter.get("/admin", (req, res) => {
  res.status(200).json("get admin");
});
transactionRouter.get("/:transactionId", (req, res) => {
  res.status(200).json("get by id");
});

module.exports = transactionRouter;
