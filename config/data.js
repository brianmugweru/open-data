var mongoose = require('mongoose');
var Country = require('../models/country');
var Location = require('../models/location');
var db = require('./database');

mongoose.connect(db.mongodb_url, { useNewUrlParser: true});

const Countries = [{
    code: 'KE',
    name: 'kenya'
}, 
{ 
    code: 'KH',
    name: 'cambodia'
}];

Country.deleteMany({}, ()=>{});


Countries.forEach(function(country, index){
    country1 = Country(country);
    country1.save((err, country) => {
        if(err) console.log(err);
        process.exit();
    });
});


const Community = ['luo', 'luhya'];

