$(document).ready(function() {
  $( '#current-year' ).text( (new Date).getFullYear() );
})

$(window).on("load", function() {
  $('body').fadeIn(1000);
  $('header')
    .delay(16500)
    .fadeIn()
})
