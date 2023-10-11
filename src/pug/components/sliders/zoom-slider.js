import Swiper, { Navigation } from 'swiper';
import gsap from 'gsap/all';

export default function zoomSlider() {
    const swiper = new Swiper('.zoom-slider-wrapper', {
        // Optional parameters
      modules: [ Navigation],
      slidesPerView: 4.5,
      loop: false,
      spaceBetween: 40,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        // when window width is >= 480px
        993: {
          slidesPerView: 3.5,
          spaceBetween: 30
        },
        1440: {
          slidesPerView: 4.5,
          spaceBetween: 40
        }
        // when window width is >= 640px
      },
      navigation: {
        nextEl: document.querySelector('[data-screen3-next]'),
        prevEl: document.querySelector('[data-screen3-prev]'),
      },
    });
  
    swiper.on('slideChangeTransitionStart', () => {
    });
  
    document.body.addEventListener('click',function zoomSliderClicker(evt){
      const target = evt.target.closest('.swiper-slide__arrow');
      if (!target) return;
  
      if (target.closest('.swiper-slide-active')) {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    });
  }