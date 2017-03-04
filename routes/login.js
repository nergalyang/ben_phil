var express = require('express');
var router = express.Router();
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

var pool = require('../database/mysql.pool.js');
passport.use('local', new LocalStrategy(
    function (username, password, done) {
        console.log(username);
        pool('SELECT * FROM USERS where name ="'+username+'"', function(err, rows, fields) {
                if (err) throw err;
                //find out RowDataPeacket Object
                var data = rows[0];
                // if (username !== data.name) {
                //     return done(null, false, { message: 'Incorrect username.' });
                // }
                if (password !== data.password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, rows);
        });
    }
));


passport.serializeUser(function (user, done) {//保存user对象
    done(null, user);//可以通过数据库方式操作
});

passport.deserializeUser(function (user, done) {//删除user对象
    done(null, user);//可以通过数据库方式操作
});
router.get('/', function (req, res) {
    res.render('login/login');//渲染login的view
});
//当post请求发起时候，就使用passport中间件的local策略，而local策略已经在上面定义了
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/kkc',
        failureRedirect: '/'
    }));
module.exports = router;
