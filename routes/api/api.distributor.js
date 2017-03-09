var express = require('express');
var router = express.Router();
var calculate = require('./calSum/calculate.js');
var getArticles = require('./article/get.articles.js');
var getOneArticle = require('./article/get.one.article.js');
var saveArticle = require('./article/save.article.js');
var updateArticle = require('./article/update.article.js');
// Get API 
router.get('/getBen',function(req, res, next) {
  res.json({ name: 'ben',age:'31'});//next果然就是下一个中间件的意思
});

router.get('/getChildProcess', calculate);
router.get('/article',getArticles);
router.get('/article/:id',getOneArticle);
//Post API
router.post('/article/',saveArticle);
router.post('/article/:id',updateArticle);


//Delete API

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(500).send({ error: '请' });
    res.redirect('/');
}