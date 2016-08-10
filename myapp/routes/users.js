var express = require('express');
var router = express.Router();
var users = require('../controllers/users');
var permission = true;

router.all('/*', function (req, res, next) {
	if (permission) {
	  	console.log('Accessing the secret section ...');
	  	next(); // pass control to the next handler
	}
  	else {
  		res.send("You have no permission to visit this part.")
  	}
});

/* GET users listing. */
router.get('/', users.index);
router.get('/:id', users.getById);

module.exports = router;
