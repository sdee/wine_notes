var express = require('express');
var router = express.Router();

// Require controller modules
var tasting_controller = require('../controllers/tastingController');


/// BOOK ROUTES ///

/* GET catalog home page. */
router.get('/', tasting_controller.index);

// /* GET request for creating a Book. NOTE This must come before routes that display Book (uses id) */
// router.get('/book/create', book_controller.book_create_get);

/* POST request for creating Book. */
router.post('/create', tasting_controller.tasting_create_post);

router.get('/create', tasting_controller.tasting_create_get);

module.exports = router;
