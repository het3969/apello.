$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 7,
        loop: true,
        margin: 13,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,

    });
});


window.onload = function() {

    setTimeout(function() {

        document.getElementById("preloader_malc").style.display = "none";

    }, 400);

};

$(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop:0
        },1000);
    })
})
// при прокрутке окна (window)
$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});

