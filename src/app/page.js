'use client';
// Importez les modules nécessaires
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin'; // Importez TextPlugin
import React, { useLayoutEffect, useEffect, useRef } from 'react';
import styles from './page.module.css';

gsap.registerPlugin(TextPlugin); // Enregistrez le plugin

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Index() {
  const text1 = useRef();
  const text2 = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to([text1.current, text2.current], {
        y: 100,
        stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.text} ref={text1}>
        ok
      </span>
      <span className={styles.text} ref={text2}>
        ok
      </span>
    </div>
  );
}
