var express = require('express');
var router = express.Router();
var calculate = require('./calSum/calculate.js');
var getArticle = require('./article/get.article.js');
var saveArticle = require('./article/save.article.js');
var updateArticle = require('./article/update.article.js');
// Get API 
router.get('/getBen',function(req, res, next) {
  res.json({ name: 'ben',age:'31'});//next果然就是下一个中间件的意思


});
router.get('/getChildProcess', calculate);
router.get('/getArticle',getArticle);
//Post API
router.post('/saveArticle/',saveArticle);
router.post('/saveArticle/:id',updateArticle);

module.exports = router;