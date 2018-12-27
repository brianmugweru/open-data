var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommunityModel = new Schema({
    name : { type: String, required: [true, 'Community name required']},
    primary_language : { type: String, required: [true, 'Important for translations']},
    secondary_languages: { type: String },
    location: [{type: Schema.Types.ObjectId, ref: 'Location' }],
    mine: [{type: Schema.Types.ObjectId, ref: 'Mine'}]
});

var Community = mongoose.model('communities', CommunityModel);
module.exports = Community;
