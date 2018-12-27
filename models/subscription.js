var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubscriptionModel = new Schema({
    action: [{type: Schema.Types.ObjectId, ref: 'Action' }],
    phone: {type: String},
    email: {type: String},
    country: [{type: Schema.Types.ObjectId, ref: 'Country' }],
    location: [{type: Schema.Types.ObjectId, ref: 'Location' }],
    mine: [{type: Schema.Types.ObjectId, ref: 'Mine' }],
});

var Subscription = mongoose.model('subscriptions', SubscriptionModel);
module.exports = Subscription;