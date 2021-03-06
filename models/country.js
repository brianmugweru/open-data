var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CountryModel = new Schema({
    code : { type: String, required: [true, 'Add Country Code Please']},
    name: { type: String, required: [true, 'Add country name']}
});

var Country = mongoose.model('countries', CountryModel);
module.exports = Country;
