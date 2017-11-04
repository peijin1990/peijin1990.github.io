/*$(document).ready(function () {
    var owl = $('.owl-carousel');
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav:true,
        navText:['<','>']
    });
    $('.ad').on('mouseover',function(){
        owl.trigger('stop.owl.autoplay');
    });
    $('.ad').on('mouseleave',function(){
        owl.trigger('play.owl.autoplay',[1000]);
    });
});
*/
$(document).ready(function(){
  var owl=$(".owl-carousel");
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
  });
  $(".ad").on("mouseover",function(){
    owl.trigger("stop.owl.autoplay");
  });
  $(".ad").on("mouseleave",function(){
    owl.trigger("play.owl.autoplay",[1000]);
  });

});
