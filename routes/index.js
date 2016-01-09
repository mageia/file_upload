var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require("fs");

var upload = multer({dest: './uploads/'});

router.get('/', function(req, res) {
  res.render('index', { title: 'File Upload Test' });
});

router.post('/upload', upload.single('key'), function(req, res){
  fs.readFile(req.file.path, function(e, d){
    console.log(d);
  });
  console.log(req.file.path);
  res.status(204).end()
});

module.exports = router;
