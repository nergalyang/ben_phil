var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('login/login', {name: 'Hen'});
});
// router.post('/',
//     passport.authenticate('local', {
//         successRedirect: '/aaa',
//         failureRedirect: '/'
//     }));
module.exports = router;