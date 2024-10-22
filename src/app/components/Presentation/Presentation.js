'use client';
// ==================== IMPORT BIBLIOTHEQUES ====================
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealText, toGreen, parallax } from './animations';
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

// ==================== HOOK POUR VERIFIER LE RENDU CÔTÉ CLIENT ====================
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

//! ==================== COMPOSANT ====================
const Presentation = ({ timeline }) => {
  // ==================== SELECTEURS ====================
  const section_1 = useRef(null);
  const roundedSquare1 = useRef(null);
  const roundedSquare2 = useRef(null);
  const roundedSquare3 = useRef(null);
  const greenDot = useRef(null);

  // ==================== ÉTAT ====================
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const isClient = useIsClient(); // Vérifie si le rendu est côté client

  // ==================== EFFETS ====================
  useEffect(() => {
    if (isClient) {
      // Mettre à jour l'état de la taille de l'écran côté client
      const updateScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 1500);
      };

      // Initialiser l'état de la taille de l'écran
      updateScreenSize();

      // Ajouter un écouteur d'événements sur le redimensionnement de la fenêtre
      window.addEventListener('resize', updateScreenSize);

      // Nettoyer l'écouteur d'événements
      return () => {
        window.removeEventListener('resize', updateScreenSize);
      };
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      const descriptionRoundedSquares = gsap.utils.toArray(
        `.${styles.description}`
      );
      revealText(descriptionRoundedSquares);
      toGreen(greenDot.current);

      if (timeline) {
        timeline.add(
          parallax(
            roundedSquare1.current,
            section_1.current,
            roundedSquare2.current,
            roundedSquare3.current
          )
        );
      }
    }
  }, [timeline, isClient]);

  // ==================== RENDU ====================
  return (
    <section className={styles.section1} ref={section_1} id='presentation'>
      <div className={styles.section1__wrapper}>
        {/* 1ER RECTANGLE */}
        <div
          className={`${styles.section1__wrapper__roundedSquare1} ${rightGrotesk.className}`}
          ref={roundedSquare1}
        >
          <div
            className={styles.section1__wrapper__roundedSquare1__titleWrapper}
          >
            <h2>Olivier HUYNH</h2>
          </div>
        </div>

        {/* 2ÈME RECTANGLE */}

        <div
          className={`${styles.section1__wrapper__roundedSquare2} ${spaceMono.className}`}
          ref={roundedSquare2}
        >
          <div
            className={
              styles.section1__wrapper__roundedSquare2__descriptionWrapper
            }
          >
            <span
              className={
                styles.section1__wrapper__roundedSquare2__descriptionWrapper__text
              }
            >
              → Développeur web
            </span>
          </div>
          <div
            className={
              styles.section1__wrapper__roundedSquare2__descriptionWrapper
            }
          >
            <span
              className={
                styles.section1__wrapper__roundedSquare2__descriptionWrapper__text
              }
            >
              → {!isSmallScreen && 'Spécialisé'} front-end
            </span>
          </div>
        </div>

        {/* 3ÈME RECTANGLE */}

        <div
          className={`${styles.section1__wrapper__roundedSquare3} ${spaceMono.className}`}
          ref={roundedSquare3}
        >
          <div
            className={
              styles.section1__wrapper__roundedSquare3__descriptionWrapper
            }
          >
            <span className={styles.section1__wrapper__roundedSquare3__text}>
              <div
                className={
                  styles.section1__wrapper__roundedSquare3__text__greendot
                }
                ref={greenDot}
              >
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
