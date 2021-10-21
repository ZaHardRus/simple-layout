document.querySelector('.faq-accordion').addEventListener('click',(e)=>{
    if(e.target.closest('.faq-accordion__item-trigger-text')) {
        e.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active')
    }
})

document.querySelector('.btn--burger').addEventListener('click',(e)=>{
    document.querySelector('.section-header').classList.toggle('section-header--active-nav')
    document.querySelector('body').classList.toggle('scroll-hide')
})

//SWIPER//
new Swiper('.section-hero-image', {
    // Optional parameters
/*     direction: 'vertical',
    loop: true, */

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
/*     scrollbar: {
      el: '.swiper-scrollbar',
    }, */
  });

new Swiper('.slider-wrapper-container',{
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

new Swiper('.slider-quotes-container',{
  pagination: {
    el: '.swiper-pagination-quotes',
  },
  spaceBetween: 30,
})
//\SWIPER//