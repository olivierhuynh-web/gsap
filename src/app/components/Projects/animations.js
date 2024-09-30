import { gsap } from 'gsap';

export const introductionCards = (section2Wrapper, section_2) => {
  gsap.fromTo(
    section2Wrapper,
    {
      x: 230,
    },
    {
      // scale: 1,
      x: 0,
      ease: 'slow(0.7,0.7,false)',
      transformOrigin: 'center center',
      scrollTrigger: {
        trigger: section_2,
        start: 'top+=2px bottom',
        end: '70% bottom',
        scrub: 1,
        markers: false,
        id: 'introduction',
      },
    }
  );
};

export const scaleCards = (cards) => {
  gsap.fromTo(
    cards,
    { scale: 0.9 },
    {
      scale: 1.2,
      duration: 1,
      transformOrigin: 'center center',
      scrollTrigger: {
        trigger: cards,
        scrub: 1,
        start: '90% bottom',
        end: 'center bottom',
        markers: false,
        id: 'scale',
      },
    }
  );
};

export const pin = (section2Wrapper, section_2) => {
  gsap.fromTo(
    section2Wrapper,
    {
      translateX: 0,
    },
    {
      translateX: '-200vw',
      ease: 'sine.out',
      duration: 1,
      // scrollTrigger: {
      //   trigger: section_2,
      //   start: 'top top',
      //   end: '1000 bottom',
      //   scrub: 10,
      //   pin: true,
      //   pinSpacing: false,
      //   markers: true,
      //   id: 'horizontal',
      // },
    }
  );
};
