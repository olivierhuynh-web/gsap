'use client';
import { React, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { introductionCards, scaleCards } from './animations';
import data from '../../db/projects.json';

import styles from './Projects.module.scss';
import CustomFont from '@next/font/local';
import { Space_Mono } from '@next/font/google';

// ==================== IMPORT CUSTOM FONTS ====================
const rightGrotesk = CustomFont({
  src: '../../fonts/PPRightGrotesk-CompactDark.otf',
});

const signale = CustomFont({
  src: '../../fonts/Signale.otf',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

// ==================== INITIALISATION DES RÉFÉRENCES ====================
const Projects = () => {
  const section2Ref = useRef(null);
  const section2WrapperRef = useRef(null);

  // ==================== INITIALISATION DE L'ÉTAT ====================
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  // ==================== GESTION DE LA TAILLE DE L'ÉCRAN ====================
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Fonction pour vérifier la taille de l'écran
      const checkScreenSize = () => {
        const isSmall = window.innerWidth < 1200;
        setIsSmallScreen(isSmall);
      };

      // Initialiser la taille de l'écran lors du montage
      checkScreenSize();

      // Ajouter un écouteur d'événements pour redimensionnement de la fenêtre
      window.addEventListener('resize', checkScreenSize);

      // Nettoyer l'écouteur d'événements
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }
  }, []);

  // ==================== ADJUST TEXT SIZE ====================
  // useEffect(() => {
  //   function adjustTextSize() {
  //     const descriptionWrapper = document.querySelector(
  //       `.${styles['section2__wrapper__card__wrapper__card-content__title']}`
  //     );
  //     console.log(descriptionWrapper);
  //     const maxFontSize = 12.5; // Taille de police de départ
  //     let fontSize = maxFontSize;

  //     // Réduire la taille de police jusqu'à ce que le texte tienne sur une seule ligne
  //     while (
  //       descriptionWrapper &&
  //       descriptionWrapper.scrollWidth > descriptionWrapper.clientWidth &&
  //       fontSize > 0
  //     ) {
  //       fontSize -= 0.5; // Réduire la taille progressivement
  //       descriptionWrapper.style.fontSize = `${fontSize}px`;
  //     }
  //   }

  //   // Appeler cette fonction lorsque la page est chargée et lorsqu'elle est redimensionnée
  //   window.addEventListener('load', adjustTextSize);
  //   window.addEventListener('resize', adjustTextSize);

  //   // Cleanup listeners when component unmounts
  //   return () => {
  //     window.removeEventListener('load', adjustTextSize);
  //     window.removeEventListener('resize', adjustTextSize);
  //   };
  // }, []);

  // ==================== APPLICATION DES ANIMATIONS ====================
  useEffect(() => {
    if (!isSmallScreen) {
      // Appliquer les animations seulement si l'écran est grand
      const cards = gsap.utils.toArray(`.${styles['section2__wrapper__card']}`);

      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();

      tl.add(
        introductionCards(section2WrapperRef.current, section2Ref.current)
      );
      if (cards.length > 0) {
        tl.add(scaleCards(cards));
      }
    } else {
      console.log('Animations skipped for small screen');
    }
  }, [isSmallScreen]);

  // ==================== RENDU DU COMPOSANT ====================
  return (
    <section className={styles['section2']} ref={section2Ref} id='projets'>
      <div className={styles['section2__wrapper']} ref={section2WrapperRef}>
        {data.projects.map((project) => (
          <div className={styles['section2__wrapper__card']} key={project.id}>
            <div className={styles['section2__wrapper__card__wrapper']}>
              <div
                className={
                  styles['section2__wrapper__card__wrapper__image-wrapper']
                }
              >
                <Image
                  src={`/images/${project.image}`}
                  alt='Picture of the project'
                  width={500}
                  height={isSmallScreen ? 150 : 300}
                  className={
                    styles[
                      'section2__wrapper__card__wrapper__image-wrapper__card-image'
                    ]
                  }
                />
              </div>
              <div
                className={
                  styles['section2__wrapper__card__wrapper__card-content']
                }
              >
                <h3
                  className={`${styles['section2__wrapper__card__wrapper__card-content__title']} ${rightGrotesk.className}`}
                >
                  {project.name}
                </h3>

                <div
                  className={
                    styles[
                      'section2__wrapper__card__wrapper__card-content__tags'
                    ]
                  }
                >
                  {project.technologies.map((technology) => (
                    <div
                      key={technology}
                      className={`${styles['section2__wrapper__card__wrapper__card-content__tags__tag']}  ${spaceMono.className}`}
                    >
                      {technology}
                    </div>
                  ))}
                </div>

                <div
                  className={
                    styles[
                      'section2__wrapper__card__wrapper__card-content__descriptionWrapper'
                    ]
                  }
                >
                  <p
                    className={`${styles['section2__wrapper__card__wrapper__card-content__descriptionWrapper__text']} ${spaceMono.className}`}
                  >
                    {project.description}
                  </p>
                </div>

                <div
                  className={
                    styles[
                      'section2__wrapper__card__wrapper__card-content__buttonWrapper'
                    ]
                  }
                >
                  <a href={`${project.url}`}>
                    <div
                      className={`${styles['section2__wrapper__card__wrapper__card-content__buttonWrapper__button']} ${signale.className}`}
                    >
                      WEBSITE <div>➝</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
