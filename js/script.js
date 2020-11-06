var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$(function(){

    // fixar header
    $(window).scroll(function(){
        if($(this).scrollTop() > 80){
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
        }
    })

    //video
    $('.botao').click(function(e) {
        e.preventDefault();
        $('.video').addClass('active');
    })

    //esconde vídeo
    $(document).on("click", function(e){
        if($(e.target).closest(".eu")[0] || $(e.target).closest(".botao")[0] ){
           e.stopPropagation();
        }else{
            $('.video').removeClass('active');
            location.reload();
        }
     });
   
});
