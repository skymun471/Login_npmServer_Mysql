var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Moon156520@#',
    database: 'jsman'
})
connection.connect()

router.post('/form', function(req,res){
    console.log(req.body.email);
    // res.send("post response")
    // res.send("<h1>Welcome " +req.body.email+ "</h1>")
    res.render('email.ejs', {'email': req.body.email})
    // key 값 섧정부분(클라이언트의 요청된 정보를 사용함)
}); //이 상태로는 post를 전송할 수 없음 따로 모듈이 필요하다. body-parser 설치

router.post('/ajax', function(req, res){
    // console.log(req.body.email);
    // var responseData = {'result': 'ok', 'email':req.body.email};
    var email = req.body.email;
    var responseData = {};

    var query = connection.query('select name from topic where email = "' + email +'"', function(err, rows){
        if(err) throw err;
        if(rows[0]){
            // console.log(rows[0].name)
            responseData.result = "ok"
            responseData.name = rows[0].name
        }else{
            // console.log('none: ' + rows[0].name)
            responseData.result = "none"
            responseData.name = ""
        }
        res.json(responseData)
    })
    

})
module.exports = router;