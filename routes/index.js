var express = require('express');
var router = express.Router();
var ArticleRoutes = require('./article');
var CommunityRoutes = require('./community');
var CountryRoutes = require('./country');
var LocationRoutes = require('./location');
var MineRoutes = require('./mine');
var ResearchRoutes = require('./research');
var SourceRoutes = require('./source');
var ActionRoutes = require('./action');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ACTION CRUD
router.get('/actions', ActionRoutes.index);
router.post('/subscriptions', ActionRoutes.subscription);

// ARTICLE CRUD
router.get('/articles', ArticleRoutes.index);
router.get('/articles/create', ArticleRoutes.create);
router.get('/articles/:id', ArticleRoutes.show);
router.get('/articles/:id/edit', ArticleRoutes.edit);
router.post('/articles', ArticleRoutes.store);
router.post('/articles/:id/update', ArticleRoutes.update);
router.get('/articles/:id/delete', ArticleRoutes.delete);

// COMMUNITY CRUD
router.get('/communities', CommunityRoutes.index);
router.get('/communitites/:id', CommunityRoutes.show);
router.get('/communitites/create', CommunityRoutes.create);
router.get('/communities/:id/edit', CommunityRoutes.edit);
router.post('/communities/', CommunityRoutes.store);
router.post('/communities/:id/update', CommunityRoutes.update);
router.get('/communities/:id/delete', CommunityRoutes.delete);

// COUNTRY CRUD
router.get('/countries', CountryRoutes.index);
router.get('/countries/:id', CountryRoutes.show);
router.get('/countries/create', CountryRoutes.create);
router.get('/countries/:id/edit', CountryRoutes.edit);
router.post('/countries', CountryRoutes.store);
router.post('/countries/:id/update', CountryRoutes.update);
router.get('/countries/:id/delete', CountryRoutes.delete);
router.get('/countries/:id/locations', CountryRoutes.locations);

// LOCATION ROUTES
router.get('/locations', LocationRoutes.index);
router.get('/locations/:id', LocationRoutes.show);
//router.get('/locations/create', LocationRoutes.create);
router.get('/locations/:id/edit', LocationRoutes.edit);
router.post('/locations/store', LocationRoutes.store);
router.post('/locations/:id/update', LocationRoutes.update);
router.get('/locations/:id/delete', LocationRoutes.delete);
router.get('/locations/:id/mines', LocationRoutes.mines);

//  MINE CRUD ROUTES
router.get('/mines', MineRoutes.index);
router.get('/mines/:id', MineRoutes.show);
//router.get('/mines/create', MineRoutes.create);
router.get('/mines/:id/edit', MineRoutes.edit);
router.post('/mines', MineRoutes.store);
router.post('/mines/:id/update', MineRoutes.update);
router.get('/mines/:id/delete', MineRoutes.delete);

// RESEARCH CRUD ROUTES
router.get('/research', ResearchRoutes.index);
router.get('/research/:id', ResearchRoutes.show);
//router.get('/research/create', ResearchRoutes.create);
router.get('/research/:id/edit', ResearchRoutes.edit);
router.post('/research', ResearchRoutes.store);
router.post('/research/:id/update', ResearchRoutes.update);
router.get('/research/:id/delete', ResearchRoutes.delete);

// SOURCE CRUD ROUTES
router.get('/sources', SourceRoutes.index);
router.get('/sources/:id', SourceRoutes.show);
//router.get('/sources/create', SourceRoutes.create);
router.get('/sources/:id/edit', SourceRoutes.edit);
router.post('/sources', SourceRoutes.store);
router.post('/sources/:id/update', SourceRoutes.update);
router.get('/sources/:id/delete', SourceRoutes.delete);

module.exports = router;
