import { React, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { introductionCards, scaleCards, pin } from './animations';
import data from '../../db/projects.json';

import styles from './Projects.module.scss';
import CustomFont from '@next/font/local';
import { Space_Mono } from '@next/font/google';

const rightGrotesk = CustomFont({
  src: '../../fonts/PPRightGrotesk-CompactDark.otf',
});
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

const Projects = () => {
  const section2Ref = useRef(null);
  const section2WrapperRef = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray(`.${styles['section2__card']}`);

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.add(introductionCards(section2WrapperRef.current, section2Ref.current));
    tl.add(scaleCards(cards));
    tl.add(pin(section2WrapperRef.current, section2Ref.current));
  }, []);

  return (
    <section className={styles['section2']} ref={section2Ref} id='projets'>
      {isSmallScreen ? (
        <div className={styles['section2__wrapper']} ref={section2WrapperRef}>
          {data.projects.map((project) => (
            <div className={styles['section2__wrapper__card']} key={project.id}>
              <div className={styles['section2__wrapper__card__image-wrapper']}>
                <div
                  className={styles['section2__wrapper__card__image-wrapper']}
                >
                  <Image
                    src='https://picsum.photos/500/300/?image=10'
                    alt='Picture of the author'
                    width={500} // Largeur de l'image
                    height={100} // Hauteur de l'image
                    className={
                      styles[
                        'section2__wrapper__card__image-wrapper__card-image'
                      ]
                    } // Assure-toi que la classe CSS est correcte
                    // style={{
                    //   objectFit: 'contain', // Assure que l'image garde ses proportions
                    //   objectPosition: 'top left', // Positionne l'image en haut à gauche
                    // }}
                  />
                </div>
              </div>
              <div className={styles['section2__wrapper__card__card-content']}>
                <h3
                  className={`${styles['section2__wrapper__card-title']} ${rightGrotesk.className}`}
                >
                  {project.name}
                </h3>
                <p
                  className={`${styles['section2__wrapper__card-description']} ${spaceMono.className}`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles['section2__wrapper']} ref={section2WrapperRef}>
          {data.projects.map((project) => (
            <div className={styles['section2__wrapper__card']} key={project.id}>
              <div className={styles['section2__wrapper__card__image-wrapper']}>
                <Image
                  src='https://picsum.photos/500/300/?image=10'
                  width={500}
                  height={300}
                  alt='Picture of the author'
                  className={
                    styles['section2__wrapper__card__image-wrapper__card-image']
                  }
                />
              </div>
              <div className={styles['section2__wrapper__card__card-content']}>
                <h3
                  className={`${styles['section2__wrapper__card-title']} ${rightGrotesk.className}`}
                >
                  {project.name}
                </h3>
                <p
                  className={`${styles['section2__wrapper__card-description']} ${spaceMono.className}`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
