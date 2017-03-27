var Tasting = require('../models/tasting');

var async = require('async')

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all tastings
exports.tasting_list = function(req, res, next) {
  Tasting.find({}, 'berry citrus')
   .exec(function (err, list_tastings) {
     if (err) { return next(err); }
     //Successful, so render
     res.render('tasting_list', {tasting_list: list_tastings});
   })
};

// Display tasting create form on GET
exports.tasting_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tasting create GET');
};

// Handle tasting create on POST
exports.tasting_create_post = function(req, res) {
	req.checkBody('berry', 'berry must not be empty.').notEmpty();
	req.checkBody('citrus', 'citrus must not be empty').notEmpty();

  req.sanitize('berry').escape();
  req.sanitize('citrus').escape();

  let citrus = req.query.citrus;
  let berry = req.query.berry;


  console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(req.body);
  console.log(berry);
  console.log(citrus);
  console.log("======================");
	var tasting = new Tasting(
	{ berry: berry,
		citrus: citrus
	 });
   tasting.save(function (err) {
     if (err) {res.send(err);}
     res.render('tasting_create');
   });
}
