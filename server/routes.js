const router = require('express').Router();
const controller = require('./controllers');

// products
router.get('/products', controller.products.get);
// router.get('/products/:product_id', controller.productId.get);
// router.post('/products', controller.products.post);

// // features
// router.get('/features', controller.features.get);
// router.post('/features', controller.features.post);

// // styles
// router.get('/products/:product_id/styles', controller.styles.get);
// router.post('/styles', controller.styles.post);

// //skus
// router.get('/skus', controller.skus.get);
// router.post('/skus', controller.skus.post);

// // photos
// router.get('/photos', controller.photos.get);
// router.post('/photos', controller.photos.post);

module.exports = router;
