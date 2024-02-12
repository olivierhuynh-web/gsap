import React from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  const section_2 = useRef(null);

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
