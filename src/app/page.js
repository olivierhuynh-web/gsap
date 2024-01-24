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
  const elementHorizontal = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const section_1 = useRef(null);
  const section_2 = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      const verticalMovement = gsap.fromTo(
        elementVertical.current,
        { rotation: 0 },
        {
          rotation: 360,
          y: 100,
          duration: 3,
          backgroundColor: 'blue',
          scrollTrigger: {
            trigger: section_1.current, // Utilisez section_1 comme déclencheur
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true,
          },
        }
      );

      let horizontal_elements =
        gsap.utils.toArray < HTMLElement > '.horizontalElement';

      // let horizontal_elements = gsap.utils.toArray(styles.horizontalElement);

      // Créez une séquence d'animations pour chaque élément horizontal
      horizontal_elements.forEach((element, index) => {
        const horizontalMovement = gsap.to(element, {
          xPercent: -100 * (horizontal_elements.length - 1),
          ease: 'sine.out',
          scrollTrigger: {
            trigger: element, // Utilisez l'élément actuel comme déclencheur
            pin: true,
            scrub: 3,
            snap: 1 / (horizontal_elements.length - 1),
            end: '+=5000', // Vous devrez ajuster cette valeur en fonction de la taille de vos éléments
          },
        });

        tl.add(horizontalMovement);
      });

      tl.add(verticalMovement);
      // tl.add(horizontalMovement);
    }, []);
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
            ref={elementHorizontal[0]}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal[1]}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal[2]}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal[3]}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal[4]}
          ></div>
          <div
            className={styles.horizontalElement}
            ref={elementHorizontal[5]}
          ></div>
        </section>
      </div>
    </div>
  );
}
