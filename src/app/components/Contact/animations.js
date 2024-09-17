import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const slideEmail = (emailBubble, section_3, contactLink) => {
  gsap.registerPlugin(ScrollTrigger);

  if (emailBubble) {
    emailBubble.style.willChange = 'transform';
  }
  if (contactLink) {
    contactLink.style.willChange = 'color';
  }

  gsap.to(emailBubble, {
    x: -70,
    scrollTrigger: {
      trigger: section_3,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers: false, // Désactivez les marqueurs pour éviter les distractions
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
      markers: false,
    },
  });
};

export const slideSocial = (socialBubble, section_3) => {
  gsap.registerPlugin(ScrollTrigger);

  if (socialBubble) {
    socialBubble.style.willChange = 'transform';
  }

  gsap.to(socialBubble, {
    y: 45,
    scrollTrigger: {
      trigger: section_3,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers: false,
      id: 'social',
    },
  });
};

export const toBlue = (blueDot, section_3) => {
  gsap.registerPlugin(ScrollTrigger);

  if (blueDot) {
    blueDot.style.willChange = 'color';
  }

  gsap.to(blueDot, {
    scrollTrigger: {
      trigger: section_3,
      id: 'YOYOYOYOYOYOYOYOYO',
      markers: false,
    },
    color: 'blue',
    delay: 1,
    duration: 0.01,
  });
};
