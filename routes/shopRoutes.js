const express = require('express');
const shopController = require('../controller/shop');

const router = express.Router();

router.get('/',shopController.getIndex);

router.get('/product/:productId',shopController.getProductDetail);
module.exports = router;
