// ==================== IMPORT BIBLIOTHEQUES ====================
import { React, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// ===============================================

// ==================== IMPORT ANIMATIONS + DATA ====================
import { introductionCards, scaleCards, pin } from './animations';
import data from '../../db/projects.json';

// ===============================================

// ==================== IMPORT STYLES ====================
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
// ===============================================

//! ==================== COMPOSANT ====================
const Projects = () => {
  // ==================== SELECTEURS ====================
  const section_2 = useRef(null);
  const section2Wrapper = useRef(null);
  const elementHorizontal0 = useRef(null);
  const elementHorizontal1 = useRef(null);
  const elementHorizontal2 = useRef(null);
  const elementHorizontal3 = useRef(null);
  const elementHorizontal4 = useRef(null);
  const elementHorizontal5 = useRef(null);
  const cards = document.querySelectorAll(`.${styles.horizontalElement}`);
  // ===============================================

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    let ctx = gsap.context(() => {
      tl.add(introductionCards(section2Wrapper.current, section_2.current));
      tl.add(scaleCards(cards));
      tl.add(pin(section2Wrapper.current, section_2.current));
    }, []);
  });

  return (
    <section className={styles.section_2} ref={section_2}>
      <div className={styles.section_2__wrapper} ref={section2Wrapper}>
        <div></div>
        {data.projects.map((project) => (
          <div className={styles.horizontalElement} ref={elementHorizontal0}>
            {/* <div className='card'> */}
            <div className={styles.image_wrapper}>
              <Image
                src='https://picsum.photos/500/300/?image=10'
                width={500}
                height={300}
                alt='Picture of the author'
                className={styles.card_image}
              />
            </div>
            <div className={styles.card_content}>
              <h3
                className={`
                      ${styles.card_title}
                       ${rightGrotesk.className}`}
              >
                {project.name}
              </h3>
              <p className={spaceMono.className}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
