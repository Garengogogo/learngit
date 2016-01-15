/**
 * Created by zhb12 on 2015/11/11.
 */
var express=require("express")
var app=express();
var path = require('path');
//中间件----由express服务器提供给我们使用  当前用于记录日志
app.use(express.logger("dev"));
//启用bodyParser中间件--post请求的主体
app.use(express.bodyParser())


var session = require('express-session');
app.use(session({
    resave: true,
    saveUninitialized: false,
    //cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
    cookie: { maxAge: 1000 * 60 },
    secret: "mysecret",
    key: "mykey"
}));


//设置静态路径
app.use(express.static(path.join(__dirname, 'public')));
var user=require('./router/user.js')
app.get("/",function(req,res){// request  response
    res.send("hello world")
})
app.get("/login",user.login);
//app.post("/userLogin",user.userLogin)
app.post("/userLogin",user.userLogin)

app.get("/register.html",user.regist)
app.post("/regist",user.userRegist)
//查询用户名重复
app.post("/select",user.userSelect)
//welcome
app.get('/haha',user.welcome)
console.log("ok")
app.listen(9000,'127.0.0.1');