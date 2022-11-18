const categoryRouter = require("express").Router();

categoryRouter.post("/", (req, res) => {
  res.status(201).json("create");
});
categoryRouter.get("/", (req, res) => {
  res.status(200).json("get all");
});
categoryRouter.patch("/:categoryId", (req, res) => {
  res.status(200).json("patch");
});
categoryRouter.delete("/:categoryId", (req, res) => {
  res.status(200).json("delete");
});

module.exports = categoryRouter;
