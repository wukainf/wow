
$(function() {

  $('.hreview').addClass('col-md-3');
  $('.hreview2').removeClass('col-md-3');
  $('.hreview2').addClass('col-md-6')
  $('.hreview').addClass('col-sm-4');
  $('.hreview2').addClass('col-sm-8');
  $('.hreview').addClass('col-xs-6');
  $('.hreview2').addClass('col-xs-12');
  $('.review').addClass('text-justify');


    $('img').addClass('img-responsive');
    // var re = document.getElementsByClassName("review");
  $(document).ready(function() {
    $(".review").masonry({
      itemSelector: '.hreview',
      // columnWidth: 200
    })
  })
})
