var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResearchDataModel = new Schema({
    title : {type: String, required: [true, 'More than anything, title is definitely required']},
    mine: [{type: Schema.Types.ObjectId, ref: 'Mine' }],
    findings: { type: String },
    metadata: {type: String },
}, { timestamps: { createdAt: 'created_at' }});

export default mongoose.model('researchdata', ResearchDataModel);
