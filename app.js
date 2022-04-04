var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/index')
// 로그인 정보를 저장하고 세션을 만들어 로그인 상태를 유지하기 위해 다음과 같은 라이브러리를 import함
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session')
var flash = require('connect-flash')//메세지를 쉽게 전달해주는 라이브러리


// 서버 띄움
app.listen(3000, function(){
    console.log("Start!! express server on port 3000")
})

app.use(express.static('pubilc'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(session({
    secret: 'keyboard cat',
    resave: false, //다시 요청이 왔을때 어떻게 할 것인지..?
    saveUninitialized: true
})) //세션을 암호화 하기 위한 key 값을 설정함

//middleware
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


app.use(router)