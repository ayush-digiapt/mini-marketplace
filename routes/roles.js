var express = require('express');
var router = express.Router();
var rolesController = require("../controllers/roles")


 

/* get roles. */
router.get('/', rolesController.getRoles);




module.exports = router;