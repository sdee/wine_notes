var express = require('express');
var router = express.Router();

var expressValidator = require('express-validator');
router.use(expressValidator())

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/tastings');
});

module.exports = router;
