// toggle.js //

var toggle = document.getElementById("toggle");
var toggleBtn = document.getElementById("checkbox");
var circle = document.querySelector(".circle");


toggle.onclick = function () {
    if (checkbox.checked) {
        circle.style.left = "40px";
        toggle.style.backgroundColor = "#cfcfcf";
        circle.style.backgroundColor = "#02060C";
        circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`;
    }
    else {
        circle.style.left = "0px";
        circle.style.boxShadow = "inset 0 4px 8px rgba(0,0,0,0.2)";

        toggle.style.backgroundColor = "#e3e3e3";
        circle.style.backgroundColor = " #1c1b1b";
        circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>`;
    }
}

// toggle.js end //


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
    rotate:'15deg',
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
    slidesPerView:3,
    spaceBetween:30,
    centeredSlides:true,
    grabCursor:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },    
    direction: 'horizontal',
    loop: true,
  
    
  });