'use client';
import { useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './page.module.scss'; // Importez votre fichier de style

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Index() {
  const elementRef = useRef();

  ScrollTrigger.addEventListener('refresh', function () {
    if (document.body.getAttribute('style') === '') {
      document.body.removeAttribute('style');
    }
  });

  const element = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // if (el) {
      gsap.fromTo(
        element.current,
        { rotation: 0 },
        {
          rotation: 360,
          x: 100,
          duration: 3,
          backgroundColor: 'blue',
          scrollTrigger: {
            trigger: element.current, // Corrigez ceci
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true,
          },
          onStart: () => console.log('test'), // Ajoutez ceci
        }
      );
      // }
    });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.element} ref={element}></div>
      </div>
    </div>
  );
}
