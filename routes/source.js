var Source = require('../models/source');

module.exports = {
    index(req, res) {
        Source.find({}, function(err, sources){
            if(err) return err;
            return sources;
        })
    },
    show(req, res) {
        Source.find({_id: req.params.id}, function(err, source){
            if(err) return err;
            return source;
        })
    },
    edit(req, res) {
        Source.find({_id: req.params.id}, function(err, source){
            if(err) return err;
            return res.render('sources/edit', {source: source});
        })
    },
    store(req, res) {
        var source = new Source;
        source.name = req.body.name;
        source.country = req.body.country;
        source.save(function(err, source){
            if(err) return err;
            return source;
        })
    },
    update(req, res) {
        Source.findOne({_id: req.params.id}, function(err, source){
            if(err) return err;
            if(req.body.name) source.name = req.body.name;
            if(req.body.country) source.country = req.body.country;
            source.save(function(err, source){
                if(err) return err;
                return source;
            });
        })  
    },
    delete(req, res) {
        Source.findOne({_id: req.params.id}, function(err, source){
            if(err) return err;
            source.remove({}, function(err){
                if(err) return err;
                return redirect('/sources');
            })
        })
    }
}