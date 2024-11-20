$(document).ready(function(){
  
  
  /*$(".businessotk").mouseover(function(){
    $(this).find('.boxopen').css("display", "block");
    $(this).find('.boxopen').addClass( "animate__animated");
    $(this).find('.boxopen').addClass( "animate__fadeIn");
  });
   $(".businessotk").mouseleave(function(){
    $(this).find('.boxopen').css("display", "none");
     $(this).find('.boxopen').removeClass( "animate__animated");
    $(this).find('.boxopen').removeClass( "animate__fadeIn");
  });*/
  
  $(".workshop-card").click(function(){
    $(this).find('.content-hover').css("display", "block");
    $(this).find('.content-hover').css("animation-delay", "0s");
    $(this).find('.content-hover').addClass( "animate__animated");
    $(this).find('.content-hover').addClass( "animate__flipInY");
    //$(this).css("border", "10px");
  });

  $(".workshop-card").mouseleave(function(){
    $(this).find('.content-hover').css("display", "none");
    //$(this).find('.content-hover').addClass( "animate__fadeOut");
    //$(this).css("animation-delay", "0s");
    //$(this).addClass( "animate__animated");
    //$(this).addClass( "animate__flipOutY");
    //$(this).css("border", "10px");
  });

  $(".content_box").mouseover(function(){
    $(this).find('a').css("background", "#fff");
  });
  $(".content_box").mouseleave(function(){
    $(this).find('a').css("background", "#F0F5FF");
  });

  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:false,
    nav:true,
    margin:42,
      responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })

});

