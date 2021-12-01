const router = require('express').Router();
const controller = require('./controllers');

// products
router.get('/products/:product_id/styles', controller.styles.get);
router.get('/products/:product_id', controller.productId.get);
router.get('/products', controller.products.get);

module.exports = router;
