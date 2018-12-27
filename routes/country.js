var Country = require('../models/country');
var Location = require('../models/location');

module.exports = {
    index(req, res) {
        Country.find({}, function(err, countries){
            if(err) return err;
            return res.status(200).send(countries);
        })
    },
    show(req, res) {
        Country.findOne({_id: req.params.id}, function(err, country){
            if(err) return err;
            return res.status(200).send(country);
        })
    },
    edit(req, res) {
        Country.findOne({_id: req.params.id}, function(err, country){
            if(err) return err;
            return res.render('/countries/edit', {country:country});
        })
    },
    create(req, res) {
        return res.render('/countries/create');
    },
    store(req, res) {
        var country = new Country();
        country.code = req.body.code;
        country.name = req.body.name;
        country.save(function(err, country){
            if(err) return err;
            return country;
        })
    },
    update(req, res) {
        Country.find({_id: req.params.id}, function(err, country){
            if(req.body.code) country.code = req.body.code;
            if(req.body.name) country.name = req.body.name;
            country.save(function(err, country){
                if(err) return err;
                return country;
            })
        })
    },
    delete(req, res) {
        Country.find({_id: req.params.id}, function(err, country){
            if(err) return err;
            country.remove({}, function(err){
                if(err) throw err;
                return redirect('/countries');
            })
        })
    },
    locations(req, res) {
        Country.findOne({_id: req.params.id}, function(err, country){
            if(err) throw err;
            if(!country) return res.status(404).send('country not found');
            Location.find({country: country._id}, (err, locations) => {
                if(err) throw err;
                return res.status(200).send(locations);
            })
        })
    }
}