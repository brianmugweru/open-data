var Action = require('../models/action');
var Subscription = require('../models/subscription');

module.exports = {
    index(req, res){
        Action.find({}, (err, actions) => {
            if(err) throw err;
            return res.status(200).send(actions);
        })
    },

    subscription(req, res) {
        const subscription = new Subscription();
        subscription.action = req.body.selectedAction;
        subscription.email = req.body.email;
        subscription.phone = req.body.phone;
        subscription.country = req.body.selectedCountry;
        subscription.location = req.body.selectedLocation;
        subscription.mine = req.body.selectedMine;
        subscription.save(err => {
            if(err) throw err;
            return res.status(201).send('successful');
        })
    }
}