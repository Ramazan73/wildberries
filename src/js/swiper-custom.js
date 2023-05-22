var swiper = new Swiper('.swiper', {
    speed: 500,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    debugger: true,
});