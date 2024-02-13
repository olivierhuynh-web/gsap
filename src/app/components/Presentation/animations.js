import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const revealText = (descriptionRoundedSquares) => {
  gsap.fromTo(
    descriptionRoundedSquares,
    { y: 100, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.4,
      stagger: 0.2,
      ease: 'power2.inOut',
    }
  );
};

export const parallax = (
  roundedSquare1,
  section_1,
  roundedSquare2,
  roundedSquare3
) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    roundedSquare1,
    { yPercent: 0 },
    {
      yPercent: -5,
      scrollTrigger: {
        trigger: section_1,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: true,
        id: 'parallax',
      },
    }
  );
  gsap.fromTo(
    roundedSquare2,
    { xPercent: 0, yPercent: 0 },
    {
      yPercent: -5,
      xPercent: -5,
      scrollTrigger: {
        trigger: section_1,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: true,
        id: 'parallax2',
      },
    }
  );
  gsap.fromTo(
    roundedSquare3,
    { xPercent: 0, yPercent: 0 },
    {
      yPercent: 5,
      xPercent: 5,
      scrollTrigger: {
        trigger: section_1,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: true,
        id: 'parallax3',
      },
    }
  );
};
