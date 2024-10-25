'use client';
// ==================== IMPORT BIBLIOTHEQUES ====================
import Icon from './icon';
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
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
  const section_projets = useRef(null); // Référence pour la section "projets"
  const roundedSquare1 = useRef(null);
  const roundedSquare2 = useRef(null);
  const roundedSquare3 = useRef(null);
  const greenDot = useRef(null);
  const descriptionRoundedSquares = useRef([]); // Référence pour les descriptions

  // ==================== ÉTAT ====================
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const isClient = useIsClient(); // Vérifie si le rendu est côté client

  // ==================== FONCTION DE DÉFILEMENT ====================
  const scrollToProjets = () => {
    if (section_projets.current) {
      section_projets.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // ==================== EFFETS ====================
  useEffect(() => {
    if (isClient) {
      const updateScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 1500);
      };

      updateScreenSize();
      window.addEventListener('resize', updateScreenSize);
      return () => {
        window.removeEventListener('resize', updateScreenSize);
      };
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      const descriptions = descriptionRoundedSquares.current;

      revealText(descriptions);
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
    <>
      {/* SECTION 1 */}
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
                ref={(el) => (descriptionRoundedSquares.current[0] = el)}
              >
                → Développeur web
              </span>

              <span
                ref={(el) => (descriptionRoundedSquares.current[1] = el)}
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
              <span
                className={
                  styles.section1__wrapper__roundedSquare3__descriptionWrapper__text
                }
                ref={(el) => (descriptionRoundedSquares.current[2] = el)}
              >
                <div
                  className={
                    styles.section1__wrapper__roundedSquare3__descriptionWrapper__text__greendot
                  }
                  ref={greenDot}
                >
                  ●
                </div>{' '}
                Ouvert pour collaborations et missions de développement web
              </span>
            </div>
          </div>

          {/* ICÔNE POUR SCROLL */}
          <Icon
            className={styles.section1__wrapper__myIcon}
            onClick={scrollToProjets}
          />
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section
        ref={section_projets}
        id='projets'
        className={styles.sectionProjets}
      ></section>
    </>
  );
};

export default Presentation;
