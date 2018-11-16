var express = require('express');
var router = express.Router();
var productsController = require("../controllers/products")


 

/* get one products. */
router.get('/:id', productsController.getOneProduct);

/* get all products. */
router.get('/', productsController.getAllProducts);

/* get one products. */
router.get('/sellerProducts', productsController.getSellerProducts);


/* add fav. */
router.post('/addfav/:id', productsController.addfav);

/* add fav. */
router.post('/removefav/:id', productsController.removefav);


/* serch products. */
router.post('/search', productsController.search);

/* get fav products products. */
router.post('/getfavproducts', productsController.getFavProducts);


/* post add product. */
router.post('/add', productsController.addProduct);


/* put edit product. */
router.put('/', productsController.editProduct);


/* delete delete  product. */
router.delete('/:id', productsController.deleteProduct);






module.exports = router;


