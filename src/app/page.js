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
    // Utilisez `.` pour cibler les éléments par leur classe CSS
    const text = document.querySelectorAll(`.${styles.text}`);

    let ctx = gsap.context(() => {
      gsap.to(text, {
        y: 100,
        stagger: 1, // 0.1 seconds between when each ".box" element starts animating
        from: 'end',
      });
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
    </div>
  );
}
