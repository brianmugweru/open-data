var Research = require('../models/research');

module.exports = {
    index(req, res) {
        Research.find({}, function(err, researchs){
            if(err) return err;
            return researchs;
        })
    },
    show(req, res) {
        Research.find({_id: req.params.id}, function(err, research){
            if(err) return err;
            return research;
        })
    },
    edit(req, res) {
        Research.find({_id: req.params.id}, function(err, research){
            if(err) return err;
            return res.render('researchs/edit', {research: research});
        })
    },
    store(req, res) {
        var research = new Research;
        research.title = req.body.title;
        research.mine = req.body.mine;
        research.findings = req.body.findings;
        research.metadata = req.body.metadata;
        research.save(function(err, research){
            if(err) return err;
            return research;
        })
    },
    update(req, res) {
        Research.findOne({_id: req.params.id}, function(err, research){
            if(err) return err;
            if(req.body.title) research.title = req.body.title;
            if(req.body.mine) research.mine = req.body.mine;
            if(req.body.findings) research.findings = req.body.findings;
            if(req.body.research) research.extractors = req.body.extractors;
            if(req.body.metadata) research.metadata = req.body.metadata;
            research.save(function(err, research){
                if(err) return err;
                return research;
            });
        })  
    },
    delete(req, res) {
        Research.findOne({_id: req.params.id}, function(err, research){
            if(err) return err;
            research.remove({}, function(err){
                if(err) return err;
                return redirect('/researchs');
            })
        })
    }
}