// on continue
'use client';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import Presentation from './components/Presentation/Presentation';

import styles from './page.module.scss'; // Importez votre fichier de style
import CustomFont from '@next/font/local';

const rightGrotesk = CustomFont({
  src: './fonts/PPRightGrotesk-CompactDark.otf',
  // variable: '--font-cfont',
});

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const lenis = typeof window !== 'undefined' ? new Lenis() : null;

export default function Index() {
  if (typeof window !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', (e) => {
      // console.log(e);
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  const elementVertical = useRef(null);
  const elementHorizontal0 = useRef(null);
  const elementHorizontal1 = useRef(null);
  const elementHorizontal2 = useRef(null);
  const elementHorizontal3 = useRef(null);
  const elementHorizontal4 = useRef(null);
  const elementHorizontal5 = useRef(null);

  const section_3 = useRef(null);

  const section2Wrapper = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {
      const verticalMovement = gsap.fromTo(
        elementVertical.current,
        {
          x: 0,
        },
        {
          x: 500,
          ease: 'power2.out',
          duration: 3,
          backgroundColor: 'green',
          scale: 3,
          scrollTrigger: {
            id: 'vertical', // Identifiant unique du déclencheur
            trigger: elementVertical.current, // Déclencheur de l'animation
            start: 'top 250px', // Point de départ de l'animation
            end: 'bottom 250px', // Point de fin de l'animation
            scrub: 5, // Effet de parallaxe activé
            markers: true, // Affichage des marqueurs de déclenchement pour le débogage
            toggleActions: 'play none restart reset', // Action à effectuer lors du déclenchement
          },
        }
      );

      tl.add(verticalMovement);
    }, []);

    // const box_items = document.querySelectorAll(`.${styles.horizontalElement}`);

    const introductionCards = gsap.fromTo(
      section2Wrapper.current,
      {
        // scale: 0.9,
        x: 230,
        // transformOrigin: 'center center',
      },
      {
        // scale: 1,
        x: 0,
        ease: 'slow(0.7,0.7,false)', // backgroundColor: 'red',
        // transformOrigin: 'center center',
        scrollTrigger: {
          trigger: section_2.current,
          start: 'top+=2px bottom',
          end: '70% bottom',
          scrub: 1,
          markers: true,
          id: 'introduction',
        },
      }
    );

    const cards = document.querySelectorAll(`.${styles.horizontalElement}`);

    const scaleCards = gsap.fromTo(
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

    tl.add(scaleCards);

    const pin = gsap.fromTo(
      section2Wrapper.current,
      {
        translateX: 0,
      },
      {
        translateX: '-200vw',
        ease: 'sine.out',
        duration: 1,
        scrollTrigger: {
          trigger: section_2.current,
          start: 'top top',
          end: '1000 bottom',
          scrub: 10,
          pin: true,
          markers: true,
          id: 'horizontal',
        },
      }
    );

    tl.add(pin);

    const contactPin = gsap.fromTo(
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
  });

  return (
    <div>
      <div className={styles.container}>
        <Presentation />
        {/* <div className={styles.section2And3Container}> */}

        {/* <section className={styles.section_3} ref={section_3}>
            <h2 className={mulish.className}>CONTACT</h2>
          </section> */}
        {/* </div> */}
      </div>
    </div>
  );
}
