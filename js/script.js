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
    $( this ).toggleClass( 'active' );
    $( '.social-container' ).toggleClass( 'hidden' );
    $( '.lyrics-container' ).slideToggle( normalDelay );
  });
});

$(window).on( 'load' , function() {
  $( '.social-item' ).each( function(i) {
    var item = $(this);
    setTimeout( function() {
       item.fadeInOpacity();
   }, i * normalDelay);
  });
  
  $( '.accordion-header' ).click( function () {
    $(this).next( '.accordion-body' ).stop().slideToggle( normalDelay );
  })
});
