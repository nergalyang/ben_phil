var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var passport = require('passport');
var logoutRoute = require('./routes/logout');
var loginRoute = require('./routes/login');
var homeRoute = require('./routes/home');
var app = express();

app.use(cookieParser());
app.use(bodyParser());
app.use(session({secret: 'blog.fens.me', cookie: { maxAge: 600000 },  resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//handlebars模版渲染引擎
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//路由
app.all('/', homeRoute);

//登录
app.use('/login',loginRoute);
app.use('/logout', logoutRoute);

//next就是下一个中间件
app.get('/test', isLoggedIn,function(req,res,next) {
  var a = {a:'123'};
  res.json(a);
});

var getNameRoutes = require('./routes/api/getName');

//数据接口
app.use('/api', getNameRoutes);


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
    res.status(500).send({ error: '请' });
    res.redirect('/');
}