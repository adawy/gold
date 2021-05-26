$(document).ready(function () {
    //open-nav
    $('.open-nav').click(function () {
        $('header').addClass('open-header');
        $('.overlay').addClass('open-over');
        $(this).fadeOut();
    });
    $('.overlay').click(function () {
        $('header').removeClass('open-header');
        $(this).removeClass('open-over')
        $('.open-nav').fadeIn();
    });
    //search-filter
    $('.search-filter').click(function () {
        event.preventDefault();
        $('.search-div').fadeToggle();
    });
    //close-search
    $('.close-search').click(function () {
        $('.search-div').fadeOut();
    });
});
// sliders
var mySwiper = new Swiper('.slider .swiper-container', {
    // Optional parameters
    loop: true,
    // autoplay: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
//brand
var mySwiper = new Swiper('.brand .swiper-container', {
    // Optional parameters
    loop: true,
    // autoplay: true,
    // If we need pagination
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    }
});
// // pro-slider
// var mySwiper = new Swiper('.pro-slider .swiper-container', {
//     // Optional parameters
//     loop: true,
//     // autoplay: true,
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         dynamicBullets: true,
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });
// deal-slider
var mySwiper = new Swiper('.deal-slider .swiper-container', {
    // Optional parameters
    loop: true,
    // autoplay: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


//loader
$(window).on('load', function () {
    $("#preloader_6").fadeOut(2000, function () {
        $("body").fadeIn(1000)
    })
})