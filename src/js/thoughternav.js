(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  $(window).on('hashchange', function viewChange(){
    $('main').hide();
    $(window.location.hash).show();
  });

  
}());
