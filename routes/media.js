var express = require('express');
var router = express.Router();

var MPlayer = require('mplayer');
var player = new MPlayer();

var omxp = require('omxplayer-controll');
var opts = {
  'audioOutput': 'hdmi', //  'hdmi' | 'local' | 'both'
  'blackBackground': false, //false | true | default: true
  'disableKeys': true, //false | true | default: false
  'disableOnScreenDisplay': false, //false | true | default: false
  'disableGhostbox': false, //false | true | default: false
  'subtitlePath': '', //default: ""
  'startAt': 0, //default: 0
  'startVolume': 1.0 //0.0 ... 1.0 default: 1.0
};

/* GET users listing. */
router.get('/play', function(req, res, next) {
  //player.openFile('uploads/1.tmp');
  omxp.open('uploads/1.tmp', opts);
  res.status(200).end();
});

router.get('/pause', function(req, res, next) {
  //player.pause();
  omxp.playPause();
  res.status(200).end();
});

module.exports = router;
