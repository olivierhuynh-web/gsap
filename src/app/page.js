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
  const elementHorizontalRefs = [
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
            trigger: section_1.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true,
          },
        }
      );

      const horizontalElements = gsap.utils.toArray(
        elementHorizontalRefs.map((ref) => ref.current)
      );
      console.log(horizontalElements);
      const horizontalMovement = gsap.to(horizontalElements, {
        xPercent: -100 * (horizontalElements.length - 1),
        ease: 'sine.out',
        duration: 3,
        scrollTrigger: {
          trigger: section_2.current,
          pin: true,
          scrub: 3,
          snap: 1 / (horizontalElements.length - 1),
          end: '+=5000',
        },
      });

      tl.add(verticalMovement);
      tl.add(horizontalMovement);
    }, []);
  });

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.section_1} ref={section_1}>
          <div className={styles.element} ref={elementVertical}></div>
        </section>

        <section className={styles.section_2} ref={section_2}>
          {elementHorizontalRefs.map((ref, index) => (
            <div
              key={index}
              className={styles.horizontalElement}
              ref={ref}
            ></div>
          ))}
        </section>
      </div>
    </div>
  );
}
