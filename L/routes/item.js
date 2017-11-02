/**
 * Created by Administrator on 2017/11/2 0002.
 */
var express = require('express');
var router = express.Router();
var mysql     =require('mysql');
var connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"220118",
    database:"item"
})

/* GET users listing. */
router.post('/count',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    var inp1 = req.body.inp1;
    var inp2 = req.body.inp2;
    connection.query(`INSERT INTO item.jgr (title,time) VALUES ('${req.body.inp1}','${req.body.inp2}')`,function(err,rows){

        res.header('Access-Control-Allow-Origin','*');
            console.log(rows)

            res.send(rows)

    })
})


router.get('/list',function(req,res){


    res.header('Access-Control-Allow-Origin','*');

        connection.query("SELECT * FROM jgr",function(err,rows){
            console.log(rows)

            res.send(rows)
        })

})
module.exports = router;