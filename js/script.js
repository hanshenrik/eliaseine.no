var animationDuration = 2222;
var delay = 666;

jQuery.fn.extend({
  fadeInAndSlideDown: function () {
    $( this )
      // .css( { 'margin-top': '-300px', opacity: 0 } )
      .animate( { opacity: 1 }, animationDuration );
  }
});

$(document).ready( function() {
  $( '#current-year' ).text( (new Date).getFullYear() );
});

$(window).on( 'load' , function() {
  $( 'body' ).fadeIn(1000);

  $( '.social-item' ).each( function(i) {
    var item = $(this);
    setTimeout( function () {
       item.fadeInAndSlideDown()
   }, i * delay);
  });
});
