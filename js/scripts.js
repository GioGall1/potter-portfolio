// scripts.js

document.addEventListener('DOMContentLoaded', function() {

    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
      mainContent.classList.add('visible');
    }, 500);
  });
  
gsap.timeline({ repeat: -1, repeatDelay: 1 })
  .to('.clay', {
    duration: 2,
    y: -20,
    scale: 1.2,
    ease: 'elastic.out(1, 0.3)'
  })
  .to('.clay', {
    duration: 2,
    rotation: 360,
    ease: 'none'
  }, 0);

gsap.to('.pottery-wheel', {
  duration: 2,
  rotation: 360,
  ease: 'none',
  repeat: -1
});

  // Главный слайдер (cube эффект)
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
  });

  // Слайдер работ
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      776: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  // Слайдер блогов
var swiper2 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    speed: 1000,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      776: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('#navbarSupportedContent .nav-link');

    function closeMenu() {
      var navbarCollapse = document.getElementById('navbarSupportedContent');
      if (navbarCollapse.classList.contains('show')) {
        var navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.click();
      }
    }

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
  });

document.getElementById('homeButton').addEventListener('click', function() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html'; 
    }
});

$(document).ready(function() {
  $('#contactForm').submit(function(e) {
      e.preventDefault(); 
      $('#suce_message').show(); 
  });
});
