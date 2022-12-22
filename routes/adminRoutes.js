const express = require('express');
const adminController = require('../controller/admin');

const router = express.Router();

router.get('/add-products',adminController.getAddProducts);
router.post('/add-products',adminController.postAddProducts);
router.get('/admin-control',adminController.getAdminControl);
router.post('/delete-product',adminController.postDeleteProduct);
router.get('/edit-product/:productId', adminController.getEditProduct);
module.exports = router;