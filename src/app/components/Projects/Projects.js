import { React, useEffect, useRef } from 'react';
import styles from './Projects.module.scss';
import CustomFont from '@next/font/local';
import { Space_Mono } from '@next/font/google';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { introductionCards, scaleCards, pin } from './animations';

const rightGrotesk = CustomFont({
  src: '../../fonts/PPRightGrotesk-CompactDark.otf',
  // variable: '--font-cfont',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

const Projects = () => {
  const section_2 = useRef(null);
  const section2Wrapper = useRef(null);
  const elementHorizontal0 = useRef(null);
  const elementHorizontal1 = useRef(null);
  const elementHorizontal2 = useRef(null);
  const elementHorizontal3 = useRef(null);
  const elementHorizontal4 = useRef(null);
  const elementHorizontal5 = useRef(null);
  const cards = document.querySelectorAll(`.${styles.horizontalElement}`);

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
    <div>
      <section className={styles.section_2} ref={section_2}>
        <div className={styles.section_2__wrapper} ref={section2Wrapper}>
          <div></div>
          <div className={styles.horizontalElement} ref={elementHorizontal0}>
            {/* <div className='card'> */}
            <div className={styles.image_wrapper}>
              <Image
                src='https://picsum.photos/500/300/?image=10'
                width={500}
                height={300}
                alt='Picture of the author'
                className={styles.card_image}
              />{' '}
            </div>
            <div className='card_content'>
              <h3
                className={`
                  ${styles.card_title}
                   ${rightGrotesk.className}`}
              >
                Card Grid Layout
              </h3>
              <p className={spaceMono.className}>
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <button className='btn card_btn'>Read More</button>
            </div>
            {/* </div> */}
          </div>
          <div className={styles.horizontalElement} ref={elementHorizontal1}>
            <div className={styles.image_wrapper}>
              <Image
                src='https://picsum.photos/500/300/?image=10'
                width={500}
                height={300}
                alt='Picture of the author'
                className={styles.card_image}
              />{' '}
            </div>
            <div className='card_content'>
              <h3
                className={`
                  ${styles.card_title}
                   ${rightGrotesk.className}`}
              >
                Card Grid Layout
              </h3>{' '}
              <p className={spaceMono.className}>
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <button className='btn card_btn'>Read More</button>
            </div>
          </div>
          <div className={styles.horizontalElement} ref={elementHorizontal2}>
            <div className={styles.image_wrapper}>
              <Image
                src='https://picsum.photos/500/300/?image=10'
                width={500}
                height={300}
                alt='Picture of the author'
                className={styles.card_image}
              />{' '}
            </div>
            <div className='card_content'>
              <h3
                className={`
                  ${styles.card_title}
                   ${rightGrotesk.className}`}
              >
                Card Grid Layout
              </h3>{' '}
              <p className={spaceMono.className}>
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <button className='btn card_btn'>Read More</button>
            </div>
          </div>
          <div className={styles.horizontalElement} ref={elementHorizontal3}>
            <div className={styles.image_wrapper}>
              <Image
                src='https://picsum.photos/500/300/?image=10'
                width={500}
                height={300}
                alt='Picture of the author'
                className={styles.card_image}
              />{' '}
            </div>
            <div className='card_content'>
              <h3
                className={`
                  ${styles.card_title}
                   ${rightGrotesk.className}`}
              >
                Card Grid Layout
              </h3>{' '}
              <p className={spaceMono.className}>
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <button className='btn card_btn'>Read More</button>
            </div>
          </div>
          <div className={styles.horizontalElement} ref={elementHorizontal4}>
            <div className={styles.image_wrapper}>
              <Image
                src='https://picsum.photos/500/300/?image=10'
                width={500}
                height={300}
                alt='Picture of the author'
                className={styles.card_image}
              />{' '}
            </div>
            <div className='card_content'>
              <h3
                className={`
                  ${styles.card_title}
                   ${rightGrotesk.className}`}
              >
                Card Grid Layout
              </h3>{' '}
              <p className={spaceMono.className}>
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <button className='btn card_btn'>Read More</button>
            </div>
          </div>
          <div className={styles.horizontalElement} ref={elementHorizontal5}>
            <div className={styles.image_wrapper}>
              <Image
                src='https://picsum.photos/500/300/?image=10'
                width={500}
                height={300}
                alt='Picture of the author'
                className={styles.card_image}
              />{' '}
            </div>
            <div className='card_content'>
              <h3
                className={`
                  ${styles.card_title}
                   ${rightGrotesk.className}`}
              >
                Card Grid Layout
              </h3>{' '}
              <p className={spaceMono.className}>
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
              <button className='btn card_btn'>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
