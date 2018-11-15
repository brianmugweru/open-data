var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SourceModel = new Schema({
    name : {type: String, required: [true, 'Add Country Code Please']},
    country: [{type: Schema.Types.ObjectId, ref: 'Country' }],
});

export default mongoose.model('sources', SourceModel);
