var express = require('express');
var router = express.Router();
var productsController = require("../controllers/products")


 

/* get one products. */
router.get('/:id', productsController.getOneProduct);

/* get all products. */
router.get('/', productsController.getAllProducts);

/* get one products. */
router.get('/sellerProducts', productsController.getSellerProducts);

// /* get one products. */
// router.get('/DFGEW', productsController.getOneProduct);

// /* add product. */
// router.get('/removefav', productsController.addfav);

// /* remove product. */
// router.get('/addfav', productsController.removefav);

// /* serch products. */
// router.get('/search', productsController.search);

/* post add product. */
router.post('/', productsController.addProduct);


/* put edit product. */
router.put('/', productsController.editProduct);


/* delete delete  product. */
router.delete('/:id', productsController.deleteProduct);






module.exports = router;


