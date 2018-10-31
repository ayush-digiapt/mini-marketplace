var express = require('express');
var router = express.Router();
var authController = require("../controllers/users")


 

/* login. */
router.post('/', authController.login);




module.exports = router;
