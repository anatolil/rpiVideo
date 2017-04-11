
$(document).ready(function() {
  $('#bbButton').click(function() {
    $.get('media/bb/')
  });
  $('#playButton').click(function() {
    $.get('media/play/')
  });
  $('#pauseButton').click(function() {
    $.get('media/pause/')
  });
  $('#ffButton').click(function() {
    $.get('media/ff/')
  });
});
