'use client';
import { useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Presentation from './components/Presentation/Presentation';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import styles from './page.module.scss'; // Importez votre fichier de style

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const lenis = typeof window !== 'undefined' ? new Lenis() : null;

export default function Index() {
  // ==================== LENIS ====================
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

  // ===============================================

  const [timeline, setTimeline] = useState(null);

  useIsomorphicLayoutEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    let context = gsap.context(() => {
      const tl = gsap.timeline();
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <Presentation />
        {/* <div className={styles.section2And3Container}> */}
        <Projects timeline={timeline} />
        <Contact timeline={timeline} />
        {/* </div> */}
      </div>
    </div>
  );
}
