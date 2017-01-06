
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var flash = require('express-flash');
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
var app = express();

app.use(cookieParser());
app.use(bodyParser());
app.use(session({secret: 'blog.fens.me', cookie: { maxAge: 60000 },  resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

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

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/'
    }));

app.all('/users', isLoggedIn);

app.get('/test', function (req, res) {
	res.json({name:'admin',age:18});
});
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/login');
});


app.use('/index', function (req, res) {
   res.send();
});

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log(host);

  console.log("应用实例，访问地址为 http://%s:%s", host, port);

});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
}
