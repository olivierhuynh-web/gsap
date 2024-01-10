'use client';
// Importez les modules nécessaires
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin'; // Importez TextPlugin
import React, { useLayoutEffect, useEffect, useRef } from 'react';
import styles from './page.module.scss';
import index from './2/page';

gsap.registerPlugin(TextPlugin); // Enregistrez le plugin

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Index() {
  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {}, []);
  });

  return (
    <div className={styles.container}>
      <div className={styles.animation}></div>
    </div>
  );
}
