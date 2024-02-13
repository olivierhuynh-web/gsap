import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const slideContact = (bar, section3) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    bar,
    {
      y: 0,
    },
    {
      y: -1000,
      delay: 2,
      // backgroundColor: 'red',
      scrollTrigger: {
        trigger: section3,
        start: 'top bottom',
        // end: 'bottom bottom',
        scrub: 1,
        // pin: true,
        // pinSpacing: false,
        // markers: true,
        // id: 'slidecontact',
      },
    }
  );
};
