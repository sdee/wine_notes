var Tasting = require('../models/tasting');

var async = require('async')

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all tastings
exports.tasting_list = function(req, res, next) {
  Tasting.find({}, 'berry citrus stonefruit grassy floral spicy mineral sweet sour woody tannic body balance finish');
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
  req.checkBody('stonefruit', 'stonefruit must not be empty').notEmpty();
  req.checkBody('grassy', 'grassy must not be empty').notEmpty();
  req.checkBody('floral', 'floral must not be empty').notEmpty();
  req.checkBody('spicy', 'spicy must not be empty').notEmpty();
  req.checkBody('mineral', 'mineral must not be empty').notEmpty();
  req.checkBody('sweet', 'sweet must not be empty').notEmpty();
  req.checkBody('sour', 'sour must not be empty').notEmpty();
  req.checkBody('woody', 'woody must not be empty').notEmpty();
  req.checkBody('tannic', 'tannic must not be empty').notEmpty();
  req.checkBody('body', 'body must not be empty').notEmpty();
  req.checkBody('balance', 'balance must not be empty').notEmpty();
  req.checkBody('finish', 'finish must not be empty').notEmpty();


  req.sanitize('berry').escape();
  req.sanitize('citrus').escape();
  req.sanitize('stonefruit').escape();
  req.sanitize('grassy').escape();
  req.sanitize('floral').escape();
  req.sanitize('spicy').escape();
  req.sanitize('mineral').escape();
  req.sanitize('sweet').escape();
  req.sanitize('sour').escape();
  req.sanitize('woody').escape();
  req.sanitize('tannic').escape();
  req.sanitize('body').escape();
  req.sanitize('balance').escape();
  req.sanitize('finish').escape();

  let citrus = req.query.citrus;
  let berry = req.query.berry;
  let stonefruit = req.query.stonefruit;
  let grassy = req.query.grassy;
  let floral = req.query.floral;
  let spicy = req.query.spicy;
  let mineral = req.query.mineral;
  let sweet = req.query.sweet;
  let sour = req.query.sour;
  let woody = req.query.woody;
  let tannic = req.query.tannic;
  let body = req.query.body;
  let balance = req.query.balance;
  let finish = req.query.finish;

	var tasting = new Tasting(
	 {berry: berry,
		citrus: citrus,
    stonefruit: stonefruit,
    grassy: grassy,
    floral: floral,
    spicy: spicy,
    mineral: mineral,
    sweet: sweet,
    sour: sour,
    woody: woody,
    tannic: tannic,
    body: body,
    balance: balance,
    finish: finish
	 });
   tasting.save(function (err) {
     if (err) {res.send(err);}
     res.render('tasting_create');
   });
}
