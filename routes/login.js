var express = require('express');
var router = express.Router();
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

passport.use('local', new LocalStrategy(
    function (username, password, done) {
        var user = {
            id: '1',
            username: 'admin',
            password: '123'
        }; // 可以配置通过数据库方式读取登陆账号

        if (username !== user.username) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (password !== user.password) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
    }
));

passport.serializeUser(function (user, done) {//保存user对象
    done(null, user);//可以通过数据库方式操作
});

passport.deserializeUser(function (user, done) {//删除user对象
    done(null, user);//可以通过数据库方式操作
});
router.get('/', function (req, res) {
    res.render('login/login');
});
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/'
    }));
module.exports = router;
