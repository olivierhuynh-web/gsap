// ==================== IMPORT BIBLIOTHEQUES ====================

'use client';
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ===============================================

// ==================== IMPORT ANIMATION ====================
import { revealText, toGreen, parallax } from './animations';
// ===============================================

// ==================== IMPORT STYLES ====================
import styles from './Presentation.module.scss';
import CustomFont from '@next/font/local';
const rightGrotesk = CustomFont({
  src: '../../fonts/PPRightGrotesk-CompactDark.otf',
});
import { Space_Mono } from '@next/font/google';
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});
// ===============================================

//! ==================== COMPOSANT ====================

const Presentation = ({ timeline }) => {
  // ==================== SELECTEURS ====================
  const section_1 = useRef(null);
  const roundedSquare1 = useRef(null);
  const roundedSquare2 = useRef(null);
  const roundedSquare3 = useRef(null);

  const greenDot = useRef(null);
  // ===============================================

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    console.log('window.innerWidth', window.innerWidth);
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 1000);
      };

      // Ajouter un écouteur d'événements sur le redimensionnement de la fenêtre
      window.addEventListener('resize', checkScreenSize);

      // Nettoyer l'écouteur d'événements
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }
  }, []);

  // ===============================================

  useEffect(() => {
    const descriptionRoundedSquares = gsap.utils.toArray(
      `.${styles.description}`
    );
    revealText(descriptionRoundedSquares);
    toGreen(greenDot.current);

    timeline &&
      timeline.add(
        parallax(
          roundedSquare1.current,
          section_1.current,
          roundedSquare2.current,
          roundedSquare3.current
        )
      );
  }, [timeline]);
  return (
    <section className={styles.section_1} ref={section_1} id='presentation'>
      <div className={styles.section_1wrapper}>
        <div
          className={`${styles.roundedSquare1} ${rightGrotesk.className}`}
          ref={roundedSquare1}
        >
          <div className={styles.titleWrapper}>
            <h2>Olivier HUYNH</h2>
          </div>
        </div>
        <div
          className={`${styles.roundedSquare2} ${spaceMono.className}`}
          ref={roundedSquare2}
        >
          <div className={styles.descriptionWrapper}>
            <span className={styles.description}>→ Développeur web</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.description}>
              → {!isSmallScreen && 'Spécialisé'} front-end
            </span>
          </div>
        </div>
        <div
          className={`${styles.roundedSquare3} ${spaceMono.className}`}
          ref={roundedSquare3}
        >
          <div className={styles.descriptionWrapper}>
            <span className={styles.description}>
              <div className={styles.greendot} ref={greenDot}>
                ●
              </div>{' '}
              Ouvert pour collaborations et contrats de développement web
            </span>{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
