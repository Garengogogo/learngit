var mysql=require("mysql");
exports.getConn=function(){
    var conn=mysql.createConnection({
        host:"127.0.0.1",
        port:3306,
        database:"zhb",
        user:"root",
        password:"19911212"
    })
    return conn;
}
exports.closeConn=function(conn){
    conn.end();
}
