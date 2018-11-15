var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationModel = new Schema({
    name : {type: String, required: [true, 'Add Country Code Please']},
    country: [{type: Schema.Types.ObjectId, ref: 'Country' }]
});

export default mongoose.model('locations', LocationModel);
