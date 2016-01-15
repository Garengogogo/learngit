//nodejs 文件
var userSql=require('./mysql/userSql');
//登录
exports.login=function(req,res){
   // res.send("hello")
    res.sendfile("./public/logo.html")
}
exports.userLogin=function(req,res){
    //用户登录的依据？？数据库是否存在
    //var name=req.query.name;
    //var pwd=req.query.pwd;
    var name=req.body.name;
    var pwd=req.body.pwd;
    console.log(name+" "+pwd);
    //链接数据库
    userSql.userLogin(name,pwd,req,res);
    //res.send("nihao")
}
//注册
exports.regist=function(req,res){
    res.sendfile("./public/register.html");
}
exports.userRegist=function(req,res){
    var name=req.body.name;
    var pwd=req.body.pwd;
    //链接数据库
    userSql.regist(name,pwd,req, res);
}
//查询用户名重复
exports.userSelect=function(req,res){
    var name=req.body.name;
    //链接数据库
    userSql.userSelect(name,res);
}

//welcome
exports.welcome=function(req,res){
    var name=req.session.name;
    //链接数据库
   res.send(name)
}