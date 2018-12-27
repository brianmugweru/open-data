var Location = require('../models/location');
var Mine = require('../models/mine');

module.exports = {
    index(req, res) {
        Location.find({}, function(err, locations){
            if(err) return err;
            return locations;
        })
    },
    show(req, res) {
        Location.find({_id: req.params.id}, function(err, location){
            if(err) return err;
            return location;
        })
    },
    edit(req, res) {
        Location.find({_id: req.params.id}, function(err, location){
            if(err) return err;
            return res.render('locations/edit', {location: location});
        })
    },
    store(req, res) {
        var location = new Location;
        location.name = req.body.name;
        location.country = req.body.country;
        location.save(function(err, location){
            if(err) return err;
            return location;
        })
    },
    update(req, res) {
        Location.findOne({_id: req.params.id}, function(err, location){
            if(err) return err;
            if(req.body.name) location.name = req.body.name;
            if(req.body.country) location.country = req.body.country;
            location.save(function(err, location){
                if(err) return err;
                return location;
            });
        })  
    },
    delete(req, res) {
        Location.findOne({_id: req.params.id}, function(err, location){
            if(err) return err;
            location.remove({}, function(err){
                if(err) return err;
                return res.status(302).redirect('/locations');
            })
        })
    },
    mines(req, res) {
        Location.findOne({_id: req.params.id}, (err, location) => {
            if(err) throw err;
            if(!location) return res.status(404).send('Location does not exist');

            Mine.find({location: location._id}, (err, mines) => {
                if(err) throw err;
                return res.status(200).send(mines);
            })
        })
    }
}