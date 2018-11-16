var express = require('express');
var router = express.Router();
var authController = require("../controllers/auth")


 

/* login. */
router.post('/login', authController.login);

/* logout. */
router.get('/logout', authController.logout);




module.exports = router;
