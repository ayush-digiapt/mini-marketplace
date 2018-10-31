var express = require('express');
var router = express.Router();
var productsController = require("../controllers/users")


 

/* get one products. */
router.post('/', ProductsController.getOneProduct);




module.exports = router;


