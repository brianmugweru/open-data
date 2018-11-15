var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleModel = new Schema({
    code : {type: String, required: [true, 'Add article code']},
    source: [{type: Schema.Types.ObjectId, ref: 'Source' }],
    english: {type: String },
    kheler: {type: String }
});

export default mongoose.model('articles', ArticleModel);
