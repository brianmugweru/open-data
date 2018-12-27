var mongoose = require('mongoose');
var Location = require('../models/location');
var Country = require('../models/country');
var Mine = require('../models/mine');
var Community = require('../models/community');
var db = require('./database');

mongoose.connect(db.mongodb_url, { useNewUrlParser: true});

const Locations = [{
    name: 'Athi River',
    country: 'kenya',
    mine: {
        name: 'Cement Mining',
        location: '', // get location id
        mineral: 'cement',
        extractors: 'ARM Cement Ltd.'
    },
    communities: [
        {
            name: 'kamba',
            primary_language: 'kamba',
            secondary_languages: 'swahili, english',
            location: '',
            mine: '', // get mine id from saved mine information
        },
        {
            name: 'kikuyu',
            primary_language: 'kikuyu',
            secondary_languages: 'swahili, english',
            location: '', // still get from location saved information
            mine: '',
        }
    ]
}, {
    name: 'Elgeyo - Marakwet',
    country: 'kenya',
    mine: {
        name: 'Fluospar Industries',
        location: '', // location id
        mineral: 'fluospar',
        extractors: 'fluospar mining company'
    },
    communities: [
        {
            name: 'kalenjin',
            primary_language: 'kalenjin',
            secondary_languages: 'swahili',
            location: '',
            mine: '',
        },
        {
            name: 'Maasai',
            primary_language: 'Maasai',
            secondary_languages: 'kiswahili',
            location: '',
            mine: '',
        }
    ]
}, {
    name: 'Magadi',
    country: 'kenya',
    mine: {
        name: 'magadi_soda',
        location: '',
        mineral: 'Magadi Soda',
        extractors: 'Magadi Soda Co Ltd, magadi'
    },
    communities: [
        {
            name: 'Maasai',
            primary_language: 'maasai',
            secondary_languages: 'swahili',
            location: '', // location id
            mine: '', // mine id
        }
    ]
}, {
    name: 'Karebe',
    country: 'kenya',
    mine: {
        name: 'gold mines',
        location: '', // location id
        mineral: 'gold', 
        extractors: 'Karebe Gold Mining Limited (KGML)'
    },
    communities: [
        {
            name: 'kalenjin',
            primary_language: 'kalenjin',
            secondary_languages: 'swahili',
            location: '',
            mine: '',
        },
        {
            name: 'luo',
            primary_language: 'luo',
            secondary_languages: 'english, kiswahili',
            location: '',
            mine: '',
        }
    ]
}, {
    name: 'voi',
    country: 'kenya',
    mine: {
        name: 'Graphite Mining',
        location: '', // location id
        mineral: 'graphite',
        extractors: 'Devsons Industries Limited'
    },
    communities: [
        {
            name: 'taita',
            primary_language: 'taita',
            secondary_languages: 'swahili',
            location: '',
            mine: '',
        }
    ]
}, {
    name: 'Phnom Penh',
    country: 'cambodia',
    mine: {
        name: 'Cambodian Gold Projects',
        location: '', // location id
        mineral: 'gold',
        extractors: 'Renaissance Minerals (Cambodia) Limited'
    },
    communities: [
        {
            name: 'vietnamese',
            primary_language: 'khemer',
            secondary_languages: '',
            location: '',
            mine: '',
        }
    ]
}, {
    name: 'Krong Kampong Chhnang',
    country: 'cambodia',
    mine: {
        name: 'Sand Mines',
        location: '',
        mineral: 'sand',
        extractors: 'Krong Kampong Chhnang corporation'
    },
    communities: [
        {
            name: 'cham',
            primary_language: 'khmer',
            secondary_languages: 'malay, vietnamese',
            location: '',
            mine: '',
        }
    ]
}]

Location.deleteMany({}, ()=>{});
Mine.deleteMany({}, () => {});
Community.deleteMany({}, ()=> {});

Locations.forEach((location, index) => {
    Country.findOne({'name': location.country}, (err, country) => {
        var newLocation = new Location();
        newLocation.name = location.name;
        newLocation.country = country._id;
        newLocation.save((err, savedLocation) => {
            if(err) console.log(err);
            var mine = new Mine();
            mine.name = location.mine.name;
            mine.location = savedLocation._id;
            mine.mineral = location.mine.mineral;
            mine.extractors = location.mine.extractors;
            mine.save((err, savedMine) => {
                if(err) throw err;
                for(var i=0; i < location.communities.length; i++){
                    var community = new Community;
                    community.name = location.communities[i].name;
                    community.primary_language = location.communities[i].primary_language;
                    community.secondary_language = location.communities[i].secondary_language;
                    community.location = savedLocation._id;
                    community.mine = savedMine._id;
                    community.save();
                }
            });
        });
    });
});

