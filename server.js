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
app.use(bodyParser.urlencoded({extended: true}));//这个extended是什么意思？
app.use(bodyParser.json());
app.use(session({secret: 'blog.phil', cookie: { maxAge: 600000 },  resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//handlebars模版渲染引擎
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//路由
app.all('/', function(req, res, next) {
	next();//你可以看到cluster的作用
},homeRoute);

//登录
app.use('/login',loginRoute);
app.use('/logout', logoutRoute);

//next就是下一个中间件
app.get('/test', isLoggedIn,function(req,res,next) {
 
  res.json(req.user);
});

var apiRoutes = require('./routes/api/api.distributor');
//数据接口
app.use('/api', apiRoutes);

//静态资源
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/ckeditor')));//for the purpose of cdeditor,cause we'll some of its depencies 
app.use(express.static(path.join(__dirname, 'app/lib/')));

//要解决使用cluster session 同步问题
// var cluster = require('cluster');
// var numCPUs = require('os').cpus().length;
// if (cluster.isMaster) {
//   require('os').cpus().forEach(function(){
//     cluster.fork();
//   });
//   cluster.on('exit', function(worker, code, signal) {
//     console.log('worker ' + worker.process.pid + ' died');
//   });
//   cluster.on('listening', function(worker, address) {  
//     console.log("A worker with #"+worker.id+" is now connected to " +
//      address.address +
//     ":" + address.port);  
//   }); 
// } else {
// 	var server = app.listen(8081, function () {
// 		var host = server.address().address;
// 		var port = server.address().port;
// 		console.log("应用实例，访问地址为 http://%s:%s", host, port);
// 	});
// }

  var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
  });
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(500).send({ error: '请' });
    res.redirect('/');
}