import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap, ScrollTrigger } from 'gsap/all';
import zoomSlider from "../../pug/components/sliders/zoom-slider";
import fullscreenMouseSlider from '../../pug/components/sliders/fullscreen-mouse-slider/fullscreen-mouse-slider';
import { paralaxImage } from '../../pug/components/effects/paralax-image/paralaxImage';


/** ******************************* */
/*
 * smooth scroll start
 */
global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.core.globals("ScrollTrigger", ScrollTrigger);
global.axios = axios;

gsap.registerPlugin(ScrollTrigger);


zoomSlider();

fullscreenMouseSlider();


paralaxImage(document.querySelector('.paralax-image'), null, gsap);


console.log('for deploy 1111');