var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommunityModel = new Schema({
    name : { type: String, required: [true, 'Community name required']},
    language : { type: String, required: [true, 'Important for translations']},
    location: [{type: Schema.Types.ObjectId, ref: 'Location' }],
    mine: [{type: Schema.Types.ObjectId, ref: 'Mine'}]
});

export default mongoose.model('communities', CommunityModel);
