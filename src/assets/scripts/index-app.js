import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap, ScrollTrigger } from 'gsap/all';
import zoomSlider from "../../pug/components/sliders/zoom-slider";


/** ******************************* */
/*
 * smooth scroll start
 */
global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.core.globals("ScrollTrigger", ScrollTrigger);
global.axios = axios;

gsap.registerPlugin(ScrollTrigger);


zoomSlider()