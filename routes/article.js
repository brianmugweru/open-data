var Article = require('../models/Article');

module.exports = {
    index(req, res) {
        Article.find({}, function(err, articles) {
            if (err) return res.send(err);
            return res.send(articles);
        })
    },
    create(req, res) {
        res.render('/article/new');
    },
    store(req, res) {
       var article = new Article;
       article.code = req.body.code;
       article.source = req.body.source;
       article.english = req.body.english;
       article.kheler = req.body.kheler;
       article.save(function(err, article){
           if (err) return res.send(err);
            res.redirect('/articles');
       }) 
    },
    show(req, res) {
        Article.findOne({_id: req.params.id}, function(err, article){
            if(err) return res.send(err);
            res.send(article);
        })
    },
    edit(req, res) {
        Article.findOne({_id: req.params.id}, function(err, article) {
            if(err) return err;
            res.send(article);
        })
    },
    update(req, res) {
        Article.findOne({_id: req.params.id}, function(err, article) {
            if(err) return err;
            if(req.body.code) article.code = req.body.code;
            if(req.body.source) article.source = req.body.source;
            if(req.body.english) article.english = req.body.english;
            article.save(function(err, article){
                if(err) return err;
                return res.redirect('/articles');
            })
        });
    },
    delete(req, res) {
        Article.findOne({_id: req.params.id}, function(err, article){
            if (err) return res.send(err);
            article.remove({}, function(err){
                if(err) return err;
                res.redirect('/articles');
            })
        });
    }
}