var express = require('express')
var router = express.Router()
var path = require('path')
var form = require('./form/form')
var email = require('./email/email')
var join = require('./join/index')

router.get('/', function(req,res){  //3000뒤에 아무 것도 없을 때 수행
    console.log('indexjs/ path loded')
    res.sendFile(path.join(__dirname,'../pubilc/main.html'))
})
router.use('/form',form)
router.use('/email',email)
router.use('/join',join)

module.exports = router;