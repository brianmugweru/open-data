var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResearchModel = new Schema({
    title : {type: String, required: [true, 'More than anything, title is definitely required']},
    mine: [{type: Schema.Types.ObjectId, ref: 'Mine' }],
    findings: { type: String },
    metadata: {type: String },
}, { timestamps: { createdAt: 'created_at' }});

var Research = mongoose.model('research', ResearchModel);
module.exports = Research;
