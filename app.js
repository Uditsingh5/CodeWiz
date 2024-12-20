// menu in profile js //


// .addEventListener('click',()=>{
//     menug.classList.add('show-menu')
// })
// menutoggle.addEventListener('click',()=>{
//     menug.classList.remove('show-menu')
// })
// document.addEventListener('DOMContentLoaded', (event) => {
//     const menutoggle=document.getElementById("hero-cta");
//     const menug=document.getElementById("menu");

//     menutoggle.addEventListener('click', () => {
//         menug.classList.add("show-menu");
//     });

//     // Close the tooltip when clicking outside
//     window.addEventListener('click', (event) => {
//         if (!event.target.matches('#username')) {
//             if (tooltip.classList.contains("show")) {
//                 tooltip.classList.remove("show");
//             }
//         }
//     });
// });



// menu in profile js //


// document.addEventListener('DOMContentLoaded', () => {
//     gsap.from('.title', { opacity: 0, y: -50, duration: 1 });

//     gsap.from('.feature-item', {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         stagger: 0.2,
//         delay: 0.5,
//     });
// });





var tl = gsap.timeline();
gsap.from('#main-logo', {
    x: '-50%',
    opacity: 0,
    duration: 0.5,
})
gsap.from('#nav-page .navs', {
    y: '-50%',
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

gsap.from('#right-nav', {
    x: '50%',
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})


tl.from('#hero-img', {
    x: '50%',
    width: '25%',
    height: '50%',
    opacity: 0,
    duration: 1,
})
tl.from('#hero-title', {
    opacity: 0,
    duration: 0.8,
    y: '-20',

})
tl.from('#hero-desc', {
    opacity: 0,
    duration: 0.5,

})
tl.from('#hero-cta', {
    opacity: 0,
    duration: 0.5,
    rotate: '15deg',
    y: '15',

})

tl.from('#feature-heading', {
    x: -80,
    opacity: 0,
    duration: 0.5,
    easing: 'power3.out',
    stagger: 0.3
})
tl.from('#feature-container .feature', {
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

const swiper = new Swiper('.container', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    direction: 'horizontal',
    loop: true,


});