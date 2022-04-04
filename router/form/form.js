var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/', function(req,res){
    console.log('main.html lode')
    res.sendFile(path.join(__dirname, '../../pubilc/form.html'))
});

module.exports = router;