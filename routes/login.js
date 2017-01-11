var express = require('express');
var router = express.Router();
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '20160830',
  database : 'ben_phil'
});
connection.connect();
passport.use('local', new LocalStrategy(
    function (username, password, done) {
        connection.query('SELECT * FROM USERS where name ="Ben"', function(err, rows, fields) {
                if (err) throw err;
                //find out RowDataPeacket Object
                var data = rows[0];
                if (username !== data.name) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
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
    res.render('login/login');
});
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/good',
        failureRedirect: '/'
    }));
module.exports = router;
