var express = require('express');
var router = express.Router();

var MPlayer = require('mplayer');
var player = new MPlayer();

/* GET users listing. */
router.get('/play', function(req, res, next) {
  player.openFile('uploads/1.tmp');
  res.status(200).end();
});

router.get('/pause', function(req, res, next) {
  player.pause();
  res.status(200).end();
});

module.exports = router;
