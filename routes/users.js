var express = require('express');
var router = express.Router();
var usersController = require("../controllers/users")


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
 

/* POST create user. */
router.post('/registration', usersController.createUser);


/* get deletails user. */
router.get('/details', usersController.details);



module.exports = router;



