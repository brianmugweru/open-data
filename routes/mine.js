var Mine = require('../models/mine');

module.exports = {
    index(req, res) {
        Mine.find({}, function(err, mines){
            if(err) return err;
            return mines;
        })
    },
    show(req, res) {
        Mine.find({_id: req.params.id}, function(err, mine){
            if(err) return err;
            return mine;
        })
    },
    edit(req, res) {
        Mine.find({_id: req.params.id}, function(err, mine){
            if(err) return err;
            return res.render('mines/edit', {mine: mine});
        })
    },
    store(req, res) {
        var mine = new Mine;
        mine.name = req.body.name;
        mine.location = req.body.location;
        mine.mineral = req.body.mineral;
        mine.extractors = req.body.extractors;
        mine.output = req.body.output;
        mine.save(function(err, mine){
            if(err) return err;
            return mine;
        })
    },
    update(req, res) {
        Mine.findOne({_id: req.params.id}, function(err, mine){
            if(err) return err;
            if(req.body.name) mine.name = req.body.name;
            if(req.body.location) mine.location = req.body.location;
            if(req.body.mineral) mine.mineral = req.body.mineral;
            if(req.body.mine) mine.extractors = req.body.extractors;
            if(req.body.output) mine.output = req.body.output;
            mine.save(function(err, mine){
                if(err) return err;
                return mine;
            });
        })  
    },
    delete(req, res) {
        Mine.findOne({_id: req.params.id}, function(err, mine){
            if(err) return err;
            mine.remove({}, function(err){
                if(err) return err;
                return redirect('/mines');
            })
        })
    }
}
