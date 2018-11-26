var express = require('express');
var router = express.Router();
var productsController = require("../controllers/products")


 


// /* get all products. */
// router.get('/', productsController.getAllProducts);


// /* get one products. */
// router.get('/details/:id', productsController.getOneProduct);


/* get roles. */
router.get('/', productsController.getProductsDetails);


/* get all products. */
router.get('/notfav', productsController.getNotFav);

/* get sellers products. */
router.get('/seller/myProducts', productsController.getSellerProducts);


/* add fav. */
router.get('/fav/add/:id', productsController.addFav);

/* remove fav. */
router.get('/fav/remove/:id', productsController.removeFav);


/* serch products. */
router.get('/search/:search', productsController.search);

/* get fav products products. */
router.get('/fav', productsController.getFavProducts);




/* post add product. */
router.post('/add', productsController.addProduct);


/* put edit product. */
router.put('/:id', productsController.editProduct);


/* delete delete  product. */
router.delete('/:id', productsController.deleteProduct);






module.exports = router;


