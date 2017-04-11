var express = require('express');
var multer = require('multer');
var router = express.Router();

var upload = multer({dest: 'uploads/' });
var fs = require('fs');

/* GET users listing. */
router.post('/', upload.single('file'), function(req, res, next) {
  fs.renameSync(req.file.path, 'uploads/1.tmp')
  //fs.unlinkSync(req.file.path);
  res.status(204).end();
});

module.exports = router;
