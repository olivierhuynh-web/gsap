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

    const horizontalScrollTween = gsap.to(section2Wrapper.current, {
      x: '-1000px',
      duration: 3,
      ease: 'none',
      onStart() {
        console.log('start');
      },
    });

    ScrollTrigger.create({
      trigger: section_2.current,
      start: 'top center', // Commence lorsque le centre de la section 2 atteint le haut de la fenêtre
      end: 'bottom center', // Se termine lorsque le centre de la section 2 atteint le bas de la fenêtre
      animation: horizontalScrollTween,
      scrub: 2, // Activer l'effet de frottement pour un défilement fluide
      markers: true, // Pour le débogage, affiche les marqueurs de déclenchement
      id: 'horizontal', // Identifiant unique du déclencheur
      end: () => `+=${section_2.current.offsetWidth}`, // Déclencheur de fin de l'animation
    });

    tl.add(horizontalScrollTween);
  });

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.section_1} ref={section_1}>
          <div className={styles.elementVertical} ref={elementVertical}></div>
        </section>

        <section className={styles.section_2} ref={section_2}>
          <div className={styles.section_2__wrapper} ref={section2Wrapper}>
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
