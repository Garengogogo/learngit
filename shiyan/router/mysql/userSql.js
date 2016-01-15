var connSql=require("./connection.js")
//查询id为1的数据
exports.userLogin=function(name,pwd,req,res){
    //1:获得数据库连接对象
    var conn=connSql.getConn();
    //准备sql语句
    //var sql="select count(*) as count from people where name=? and pwd=?";
    var sql="select count(*) as count from people where name=? and pwd=?";
    //执行sql语句
    conn.query(sql,[name,pwd],function(err,data){
        console.log(data)
        if(err){
            res.send()
            //res.send(data[0].count);
        }else{
           console.log('miyoua')
            req.session.name= name;
            res.send(data);
            //res.send(data[0].count);
        }
        //console.log()
    })
    connSql.closeConn(conn);
}
exports.regist=function(name,pwd,req,res){
    var conn=connSql.getConn();
    var sql="insert into people(name,pwd) values(?,?)";
    conn.query(sql,[name,pwd],function(err,data){
        console.log(data)
        if(err){
            res.send()
        }else{
            req.session.name= name;
            res.send(data)
        }
    })
    connSql.closeConn(conn);
}
//查询用户名重复
exports.userSelect=function(name,res){
    var conn=connSql.getConn();
    var sql="select count(*) as count from people where name=?";
    conn.query(sql,[name],function(err,data){
        console.log(data)
        if(data[0].count !=0){
            res.json({affectedRows:data[0].count})
            //res.send(data[0].count);
        }else{
            res.json({affectedRows:data[0].count})
            //res.send(data[0].count);
        }
    })
    connSql.closeConn(conn);
}






