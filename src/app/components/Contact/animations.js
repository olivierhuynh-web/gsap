import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const slideEmail = (emailBubble, section_3, contactLink) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(emailBubble, {
    x: -70,
    scrollTrigger: {
      trigger: section_3,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers: true,
      id: 'email',
    },
  });
  gsap.from(contactLink, {
    color: 'black',
    scrollTrigger: {
      trigger: section_3,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      // markers: true,
      // id: 'email',
    },
  });
};

export const toBlue = (blueDot, section_3) => {
  gsap.to(blueDot, {
    scrollTrigger: {
      trigger: section_3,
      // start: ' center',
      // end: 'bottom center',
      // scrub: true,
      // markers: true,
      id: 'YOYOYOYOYOYOYOYOYO',
      markers: true,
    },
    color: 'blue',
    delay: 1,
    duration: 0.01,
  });
};
