$(document).ready(function() {
  let menuOpen = false;

  $('.navbar-toggle').click(function() {
    menuOpen = !menuOpen;

    if (menuOpen) {
      $('#pika').css('margin-top', '150px');
    } else {
      $('#pika').css('margin-top', '10px');
    }
  });
});