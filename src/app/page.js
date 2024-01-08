'use client';
// Importez les modules nécessaires
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin'; // Importez TextPlugin
import React, { useLayoutEffect, useEffect, useRef } from 'react';
import styles from './page.module.css';
import index from './2/page';

gsap.registerPlugin(TextPlugin); // Enregistrez le plugin

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Index() {
  const text1 = useRef();
  const text2 = useRef();
  const conic_gradient = useRef();
  const redBackground = useRef();

  useIsomorphicLayoutEffect(() => {
    // Utilisez `.` pour cibler les éléments par leur classe CSS
    const text = document.querySelectorAll(`.${styles.text}`);
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {
      tl.to(text, {
        duration: 1,
        text: {
          value: 'ok',
          delimiter: ' ',
        },
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });
      tl.fromTo(
        conic_gradient.current,
        {
          duration: 1,
          display: 'none',
        },
        {
          duration: 1,
          zIndex: 1,
          display: 'block',
        },
        0 // Début de l'animation en même temps que le début du timeline principal
      );
      tl.to(
        conic_gradient.current,

        {
          scale: 8,
        },
        '=+1' // Début de l'animation 1 seconde après le début du timeline principal
      );
      tl.to(
        conic_gradient.current,

        {
          scale: 1,
        },
        '=+1' // Début de l'animation 1 seconde après le début du timeline principal
      );
      tl.fromTo(
        redBackground.current,
        { autoAlpha: 0, display: 'none' },
        {
          display: 'block',
          autoAlpha: 1,
          zIndex: 4,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          ease: 'none',
          duration: 0.01, // Définit la durée de l'animation à .01 seconde
        },
        '=+1'
      );
      tl.to(text, {
        zIndex: 5,
        color: 'yellow',
        border: 'none',
        stagger: function (index) {
          console.log(index);
          return index * 0.5;
        },
        ease: 'elastic.out(1,0.3)',
      });
      tl.to(
        text,
        {
          textShadow: '5px 5px #558ABB',
        },
        '=+1'
      );
    });

    return () => ctx.revert();
    //Test
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.text} ref={text1}>
        ok
      </span>
      <span className={styles.text} ref={text2}>
        ok
      </span>
      <span className={styles.text} ref={text2}>
        ok
      </span>{' '}
      <span className={styles.text} ref={text2}>
        ok
      </span>{' '}
      <span className={styles.text} ref={text2}>
        ok
      </span>{' '}
      <span className={styles.text} ref={text2}>
        ok
      </span>{' '}
      <span className={styles.text} ref={text2}>
        ok
      </span>{' '}
      <span className={styles.text} ref={text2}>
        ok
      </span>
      <div className={styles.conic_gradient} ref={conic_gradient}></div>
      <div className={styles.redBackground} ref={redBackground}></div>
    </div>
  );
}
