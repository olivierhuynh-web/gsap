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
