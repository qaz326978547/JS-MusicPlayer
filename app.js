var express = require('express')
var mysql = require('mysql');
var app = express()
app.listen(3000);
var cors = require("cors");
app.use(cors())
console.log('running');
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

var conn = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "AMATEUR",
    port: 8889,
    multipleStatements: true //可同時執行兩個MySQL指令
})

app.get("/music", function (req, res) {
    conn.query(`SELECT * FROM MusicData`, [], function (err, result) {
        res.send(result)
    })
})