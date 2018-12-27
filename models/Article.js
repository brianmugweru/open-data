var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleModel = new Schema({
    code : {type: String, required: [true, 'Add article code']},
    source: [{type: Schema.Types.ObjectId, ref: 'Source' }],
    english: {type: String },
    khmer: {type: String }
});

var Article = mongoose.model('articles', ArticleModel);
module.exports = Article;
