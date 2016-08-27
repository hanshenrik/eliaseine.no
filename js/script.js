var animationDuration = 2222;
var normalDelay = 666;
var quickDelay = 222;

jQuery.fn.extend({
  fadeInOpacity: function() {
    $( this ).animate( { opacity: 1 }, animationDuration );
  }
});

$(document).ready( function() {
  $( '#current-year' ).text( (new Date).getFullYear() );

  $( '#lyrics-button' ).click( function(e) {
    e.preventDefault();
    $( '.social-container' ).toggleClass( 'hidden' );
    $( '.lyrics-container' ).slideToggle(1000);
  });
});

$(window).on( 'load' , function() {
  $( 'body' ).fadeIn(1000);

  $( '.social-item' ).each( function(i) {
    var item = $(this);
    setTimeout( function() {
       item.fadeInOpacity();
   }, i * normalDelay);
  });
  
  $( '.accordion-item' ).click( function () {
    $(this).find( '.accordion-body' ).slideToggle(1000, function() {
      // $('html, body').animate({
      //   scrollTop: $(this).offset().top - 10
      // }, 200);
    });
  })
});
