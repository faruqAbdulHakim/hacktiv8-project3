const router = require('express').Router();

router.get('/', (_, res) => {
  res.status(200).json({ message: 'Selamat datang di API Toko Belanja' });
});

module.exports = router;
