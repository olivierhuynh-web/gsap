'use client';
// ==================== IMPORT BIBLIOTHEQUES ====================
import { useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
// ===============================================

// ==================== IMPORT COMPOSANTS ====================
import Presentation from './components/Presentation/Presentation';
// import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// ===============================================

// ==================== STYLE ====================
import styles from './page.module.scss'; // Importez votre fichier de style
// ===============================================

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const lenis = typeof window !== 'undefined' ? new Lenis() : null;

//!==================== COMPOSANT ====================
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
    <body>
      <div className={styles.container}>
        <Presentation timeline={timeline} />
        {/* <Skills timeline={timeline} /> */}

        <Projects timeline={timeline} />
        <Contact timeline={timeline} />
        {/* </div> */}
      </div>
    </body>
  );
}
