var mysql = require("mysql");
var con= mysql.createConnection({

    host:'127.0.0.1',
    user:'root',
    password:'',
    database: 'biblioteca'
});
con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecida');
        }else{
            console.log('Error de conexion');
        }

    }
);
module.exports=con;