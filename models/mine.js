var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MineModel = new Schema({
    name : {type: String, required: [true, 'Add Country Code Please']},
    location: [{type: Schema.Types.ObjectId, ref: 'Location' }],
    mineral: {type: String, required: [true, 'This is the reason you are filling this field']},
    extractors: { type: String },
    output: { type: String }
});

export default mongoose.model('mines', MineModel);
