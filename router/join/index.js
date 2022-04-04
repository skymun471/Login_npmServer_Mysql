var express = require('express')
var router = express.Router()
var path = require('path')
var mysql = require('mysql')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Moon156520@#',
    database: 'jsman'
})
connection.connect()

router.get('/', function(req,res){
    console.log('get join URL!')
    res.render('join.ejs')
    // res.sendFile(path.join(__dirname, '../../pubilc/join.html'))
});

//local-join 이라는 LocalStrategy 일종의 전략을 만들어 라우터를 생성할 떄 사용하여 정보를 서버와 주고 받도록한다.
passport.use('local-join', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    console.log('local-join callback called');
}
));


// join으로 들어어와서 local-join에서 판단을 한 후 결과 값을 아래 /main, /join으로 보여주도록 한다.
router.post('/', passport.authenticate('local-join',{
    successRedirect:'/main',
    failureRedirect: '/join',
    failureFlash: true})
)




// router.post('/', function(req,res){
//     var body = req.body
//     var email = body.email
//     var name = body.name
//     var pw = body.password
//     console.log(email, name, pw)
//     var query = connection.query('insert into topic ?' , sql, function(err,rows){
//         if(err)throw err
//         // console.log('Ok DB insert!')
//         else res.render('welcome.ejs', {'name':name, 'id':rows.insertId })
//     })
// })

module.exports = router;