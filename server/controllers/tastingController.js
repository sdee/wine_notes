var Tasting = require('../models/tasting');

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
    res.send('NOT IMPLEMENTED: Tasting create POST');
};
