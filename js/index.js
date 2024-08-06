AOS.init();
let aboutOffset=$('#about').offset().top
$(window).on('scroll',function(){
    let scrollTop= $(window).scrollTop()
    if(scrollTop > aboutOffset -70){
        $('#btnUp').fadeIn(500)
        $('#main-nav').css('backgroundColor','white')
    }else{
        $('#main-nav').css('backgroundColor','transparent')
        $('#btnUp').fadeOut(500)
    }
})
new PureCounter();

$(   function(){
    $(".loader").fadeOut(1000 , function(){
        $('.loading').fadeOut(1000 , function(){
            $('body').css('overflow' , 'auto');
            $('.loading').remove();
        })
    })
})
$('.nav-item a[href^="#"]').on('click' , function(){
    $('a').removeClass('active')
    $(this).addClass('active')
    
    let aHref=$(this).attr('href')
    let sectionOffset= $(aHref).offset().top
    $('html,body').animate({scrollTop: sectionOffset}, 1000)
})
$('#btnUp').on('click', function(){
$('html,body').animate({scrollTop: 0 }, 1000)
})
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:5
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})