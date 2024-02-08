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
            id: 'test', // Identifiant unique du déclencheur
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

    const horizontalMovement = gsap.to(
      [
        elementHorizontal0.current,
        elementHorizontal1.current,
        elementHorizontal2.current,
        elementHorizontal3.current,
        elementHorizontal4.current,
        elementHorizontal5.current,
      ],
      {
        xPercent: -1500,
        // * (elementHorizontal0 - 1)
        backgroundColor: 'red',
        ease: 'sine.out',
        duration: 10,
        scrollTrigger: {
          trigger: section_2.current,
          markers: true,
          id: 'test2',
          scrub: 3,
          // snap: 1 / (horizontalElements.length - 1),
          start: 'top top',
          end: 'bottom bottom',
        },
      }
    );
    tl.add(horizontalMovement);
  });

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.section_1} ref={section_1}>
          <div className={styles.element} ref={elementVertical}></div>
        </section>

        <section className={styles.section_2} ref={section_2}>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal0}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal1}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal2}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal3}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal4}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal5}
          ></div>
        </section>
      </div>
    </div>
  );
}
