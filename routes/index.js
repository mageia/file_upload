var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require("fs");

var upload = multer({dest: './uploads/'});

router.get('/', function(req, res) {
  res.render('index', { title: 'File Upload Test' });
});

//single file: upload.single()
var uploadOption = [{name: 'key', maxCount: 1}, {name: 'cert', maxCount: 1}];
router.post('/upload', upload.fields(uploadOption), function(req, res){
  console.log(req.files.key[0].path);
  console.log(req.files.cert[0].path);
  res.status(204).end()
});

module.exports = router;
