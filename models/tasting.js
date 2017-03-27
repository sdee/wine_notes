var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TastingSchema = new Schema({
	berry: {type: Number, required: true},
	citrus: {type: Number, required: true},
	stonefruit: {type: Number, required: true},
	grassy: {type: Number, required: true},
	floral: {type: Number, required: true},
	spicy: {type: Number, required: true},
	mineral: {type: Number, required: true},
	sweet: {type: Number, required: true},
	sour: {type: Number, required: true},
	woody: {type: Number, required: true},
	tannic: {type: Number, required: true},
	body:  {type: Number, required: true},
	balance: {type: Number, required: true},
	finish: {type: Number, required: true}
});

module.exports = mongoose.model('Tasting', TastingSchema);
