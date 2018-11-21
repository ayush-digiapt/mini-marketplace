var express = require('express');
var router = express.Router();
var productsController = require("../controllers/products")


 


/* get all products. */
router.get('/', productsController.getAllProducts);


/* get all products. */
router.get('/data', productsController.getAllProductsDetails);

/* get sellers products. */
router.get('/myProducts', productsController.getSellerProducts);


/* add fav. */
router.get('/addfav/:id', productsController.addFav);

/* remove fav. */
router.get('/removefav/:id', productsController.removeFav);


/* serch products. */
router.get('/search/:search', productsController.search);

/* get fav products products. */
router.get('/getfavproducts', productsController.getFavProducts);


/* get one products. */
router.get('/details/:id', productsController.getOneProduct);


/* post add product. */
router.post('/add', productsController.addProduct);


/* put edit product. */
router.put('/edit/:id', productsController.editProduct);


/* delete delete  product. */
router.delete('/:id', productsController.deleteProduct);






module.exports = router;


