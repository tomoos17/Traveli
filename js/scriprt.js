
$(document).ready(function(){

    //navigation bar
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400)

    });

    //navbar backgraound change
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if (pos >= 100){
                $('.navbar').addclass('.cng-navbar');
            } else {
                $('.navbar').removeclass('.cng-navbar');
            }
    });

    //sample video popup
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    //owl
    $('.location .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsiive:{
            0:{
                item: 1
            },
            600:{
                item: 2
            },
            1000:{
                item: 3
            }
        }
    })
});


