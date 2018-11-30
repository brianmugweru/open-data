var Community = require('../models/community');

module.exports = {
    index(req, res) {
        Community.find({}, function(err, communities){
            if(err) return err;
            return res.send(communities);
        })
    },
    create(req, res) {
        return res.render('communities/create');
    },
    show(req, res) {
        Community.findOne({_id: req.params.id}, function(err, community){
            if(err) return err;
            return community;
        })
    },
    store(req, res) {
        var community = new Community();
        community.name = req.body.name;
        community.language = req.body.language;
        community.location = req.body.location; // Assert Location Added
        community.mine = req.body.mine; // Assert Mine Added
        community.save(function(err, community){
            if(err) return ;
            return community;
        })
    },
    edit(req, res) {
        Community.findOne({_id: req.params.id}, function(err, community){
            if(err) return err;
            return res.render('communities/edit', {community:community});
        })
    },
    update(req, res) {
        Community.findOne({_id: req.params.id}, function(err, community){
            if(req.body.name) community.name = req.body.name;
            if(req.body.language) community.language = req.body.language;
            if(req.body.location) community.location = req.body.location; // Assert Location Added
            if(req.body.mine) community.mine = req.body.mine; // Assert Mine Added
            community.save(function(err, community){
                if(err) return ;
                return community;
            })
        })
    },
    delete(req, res) {
        Community.findOne({_id: req.params.id}, function(err, community){
            if(err) return err;
            Community.remove({}, function(err){
                if(err) return err;
                return redirect('/communities');
            })
        })
    }

}