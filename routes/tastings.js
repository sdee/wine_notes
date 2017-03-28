var express = require('express');
var router = express.Router();

// Require controller modules
var tasting_controller = require('../controllers/tastingController');

/// BOOK ROUTES ///

/* GET catalog home page. */
router.get('/', tasting_controller.tasting_list);

router.get('/recent', tasting_controller.tasting_most_recent);

/* POST request for creating Book. */
router.post('/create', tasting_controller.tasting_create_post);

router.get('/create', tasting_controller.tasting_create_get);

// /* GET request for list of all Book. */
// router.get('/', tasting_controller.tasting_list)

module.exports = router;
