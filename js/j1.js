$(function() {
  $('.review').addClass('text-justify');
  $('.hreview').addClass('col-md-3');
  $('.hreview2').removeClass('col-md-3');
  $('.hreview2').addClass('col-md-6')
  $('.hreview').addClass('col-sm-4');
  $('.hreview2').addClass('col-sm-8');
  $('.hreview').addClass('col-xs-6');
  $('.hreview2').addClass('col-xs-12');
  $('img').addClass('img-responsive');
  $('.review').masonry({
    itemSelector: '.hreview',
    // columnWidth: 200
  })
})
