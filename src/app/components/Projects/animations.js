import { gsap } from 'gsap';

const getAmountToScroll = (section2Wrapper) => {
  return section2Wrapper.offsetWidth - window.innerWidth;
};

export const introductionCards = (section2Wrapper, section_2) => {
  const amountToScroll = getAmountToScroll(section2Wrapper);

  gsap.fromTo(
    section2Wrapper,
    { x: 0 },
    {
      x: -amountToScroll - 100,
      ease: 'slow(0.7, 0.7, false)',
      transformOrigin: 'center center',
      duration: 7,

      scrollTrigger: {
        trigger: section_2,
        start: '5% top',
        end: '150% bottom',
        scrub: 1,
        markers: true,
        pin: true,
        // Optionnel : pour un espace pin
        pinSpacing: true,
        id: 'sliding',
        invalidateOnRefresh: true,
      },
    }
  );
};

export const scaleCards = (cards) => {
  gsap.fromTo(
    cards,
    { scale: 0.9 },
    {
      scale: 1,
      duration: 1,
      transformOrigin: 'center center',
      scrollTrigger: {
        trigger: cards,
        scrub: 1,
        start: '90% bottom',
        end: 'center bottom',
        markers: true,
        id: 'scale',
      },
    }
  );
};
