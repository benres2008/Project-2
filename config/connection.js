var mysql = require("mysql");
const express = require("express")
var app = express()
const bodyparser = require("body-parser")

app.use(bodyparser.json())

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "black_market_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.listen(3306,()=>console.log("Express server is running at PORT no: 3306"))

app.get("/",(res,req)=>{
  mysqlConnection.query("SELECT * FROM ",(err,rows,fields)=>{

  })
})

module.exports = connection.js;