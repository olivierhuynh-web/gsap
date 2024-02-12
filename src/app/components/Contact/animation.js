export const contactPin = gsap.fromTo(
  section_3.current,
  {
    xPercent: 100,
  },
  {
    xPercent: 0,
    scrollTrigger: {
      trigger: section_3.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: true,
      pinSpacing: false,
      markers: true,
      id: 'contact',
    },
  }
);
tl.add(contactPin);
