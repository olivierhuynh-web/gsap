import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const slideContact = (link, section3) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    link,
    {
      y: 100,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.4,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: section3,
        start: 'top top',
        // end: 'bottom top',
        // scrub: 1,
        // end: 'bottom bottom',
        // pin: true,
        // pinSpacing: false,
        markers: true,
        id: 'slidecontact',
      },
    }
  );
  gsap.fromTo(
    section3,
    {
      background: 'linear-gradient(to bottom, #A9A9A9, #A9A9A9)',
    },
    {
      duration: 2,
      // background: 'linear-gradient(to bottom, #A9A9A9, yellow)',
      'background-color': '#A9A9A9',
      'background-image':
        'linear-gradient(342deg, #D9AFD9 100%, #97D9E1 50%, #a9a9a9 100%)',

      scrollTrigger: {
        scrub: true,
        trigger: section3,
        start: '-50px top',
        markers: true,
        id: 'linearcontact',
      },
    }
  );
};
