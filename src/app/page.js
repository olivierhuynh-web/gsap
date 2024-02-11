// on continue
'use client';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import styles from './page.module.scss'; // Importez votre fichier de style

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

  const section_1 = useRef(null);
  const section_2 = useRef(null);

  const section2_Wrapper = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {
      const verticalMovement = gsap.fromTo(
        elementVertical.current,
        {
          x: 0,
          // ,
          // backgroundColor: 'blue'
        }, // Position initiale
        {
          x: 500, // Déplacement horizontal de 100 pixels vers la droite
          ease: 'power2.out', // Fonction d'animation
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

    const box_items = document.querySelectorAll(`.${styles.horizontalElement}`);

    const horizontalMovement = gsap.to(section2_Wrapper.current, {
      // xPercent: -100 * (box_items.length - 1),
      xPercent: -100,
      ease: 'sine.out',
      scrollTrigger: {
        markers: true,
        id: 'horizontal',
        trigger: section_2.current,
        pin: true,
        scrub: 25,
        snap: 1 / (box_items.length - 1),
        // end: '+=' + section_2.offsetWidth,
        end: 'bottom 3000px',
      },
    });
    tl.add(horizontalMovement);
  });

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.section_1} ref={section_1}>
          <div className={styles.element} ref={elementVertical}></div>
        </section>

        <section className={styles.section_2} ref={section_2}>
          <div className={styles.section_2__wrapper} ref={section2_Wrapper}>
            <div className={styles.horizontalElement} ref={elementHorizontal0}>
              0
            </div>
            <div className={styles.horizontalElement} ref={elementHorizontal1}>
              1
            </div>
            <div className={styles.horizontalElement} ref={elementHorizontal2}>
              2
            </div>
            <div className={styles.horizontalElement} ref={elementHorizontal3}>
              3
            </div>
            <div className={styles.horizontalElement} ref={elementHorizontal4}>
              4
            </div>
            <div className={styles.horizontalElement} ref={elementHorizontal5}>
              5
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
