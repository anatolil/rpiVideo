var express = require('express');
var router = express.Router();

var MPlayer = require('mplayer');
var player = new MPlayer();

/* GET users listing. */
router.get('/', function(req, res, next) {
  player.pause();
});

module.exports = router;
