'use client';
import gsap from 'gsap';
import React, { useLayoutEffect, useEffect, useRef } from 'react';
import styles from './page.module.css';

import Image from 'next/image';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function index() {
  const ref = useRef();
  const container = useRef();
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          y: 0,
        },
        {
          y: -50,
          duration: 0.2,
          ease: 'bounce.out',
          repeat: 3, // Changez -1 en le nombre de fois que vous voulez que l'animation se répète
          yoyo: true,
        }
      );
      gsap.set(container.current, { backgroundColor: 'yellow' });
    });
    return () => ctx.revert();
  }, []);

  return <div className={styles.container}>test</div>;
}
