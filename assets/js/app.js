
const menuBtn = document.querySelector(".navbar__menu-hamburger");
const miniNavbar = document.querySelector(".navbar__mini");
const heroBlock = document.querySelector(".hero-main");

const radioBtn = document.querySelectorAll(".team-radiobuttons__item");

const partnersBtn = document.querySelectorAll(".partners__companies-item");
const tabItems = document.querySelectorAll(".partners_info__card");
const popupOpenBtn = document.querySelectorAll(".button__info-button");
const popupCloseBtn = document.querySelector(".popup__close");
const popup = document.querySelector(".wrap");

menuBtn.addEventListener("click", function(){
    menuBtn.classList.toggle("hamburger-active");
    miniNavbar.classList.toggle("hidden");
    heroBlock.classList.toggle("hero-main-hidden");
});

radioBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let radioKey = item.getAttribute("key");
        let carruntRadio = document.querySelector(radioKey);
        
        radioBtn.forEach(function(item){
            item.classList.remove("team-radiobuttons__item-active");
        });

        carruntRadio.classList.add("team-radiobuttons__item-active");
    });
});

partnersBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let tabId = item.getAttribute("data-tab");
        let currentTub = document.querySelector(tabId);

        partnersBtn.forEach(function(item){
            item.classList.remove("active");
        });

        tabItems.forEach(function(item){
            item.classList.remove("active");
        });

        item.classList.add("active");
        currentTub.classList.add("active");
    });
});

popupOpenBtn.forEach(function(item){
    item.addEventListener("click", function(){
        popup.classList.add("wrap-active");
    });

    popupCloseBtn.addEventListener("click", function(item){
        popup.classList.remove("wrap-active");
    });
});

new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    watchOverFlow: true,
    spaceBetween: 20,
    breakpoints: {
        320: {
            initialSlide: 1,
            slidesPerView: 1.2,
        },
        720: {
            initialSlide: 1,
            slidesPerView: 2.5,
        },
        1000: {
            initialSlide: 0,
            slidesPerView: 3.2,
        },
    },
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    miniNavbar.style.backgroundColor = "#17191D";
};