var Tasting = require('../models/tasting');

var async = require('async')

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all tastings
exports.tasting_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tasting list');
};

// Display tasting create form on GET
exports.tasting_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tasting create GET');
};

// Handle tasting create on POST
exports.tasting_create_post = function(req, res, next) {
	req.checkBody('berry', 'berry must not be empty.').notEmpty();
	req.checkBody('citrus', 'citrus must not be empty').notEmpty();
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(req.body);
	var tasting = new Tasting(
	{ berry: req.body.berry,
		citrus: req.body.citrus
	 });
   tasting.save();
res.render('tasting_create');

};
