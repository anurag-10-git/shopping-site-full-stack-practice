const express = require('express');
const adminController = require('../controller/admin');

const router = express.Router();

router.get('/add-products',adminController.getAddProducts);
router.post('/add-products',adminController.postAddProducts);

module.exports = router;