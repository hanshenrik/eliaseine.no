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

  $( '#more-button' ).click( function() {
    $( this ).find( '.icon' ).fadeOut( quickDelay, function() {
      $( this )
        .toggleClass( 'icon-dot-3 icon-cancel' )
        .fadeIn( quickDelay );
    });
    $( '#more-content' ).slideToggle();
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
});
