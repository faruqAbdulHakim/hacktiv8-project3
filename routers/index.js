const router = require("express").Router();
const usersRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const transactionRouter = require("./transactionRouter");

router.get("/", (_, res) => {
  res.status(200).json({ message: "Selamat datang di API Toko Belanja" });
});
router.use("/users", usersRouter);
router.use("/categories", categoryRouter);
router.use("/products", productRouter);
router.use("/transactions", transactionRouter);

module.exports = router;
