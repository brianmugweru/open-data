var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActionModel = new Schema({
    name: { type: String },
    description: {type: String, required:[true, 'Description desperately required']}
});

var Action = mongoose.model('actions', ActionModel);
module.exports = Action;