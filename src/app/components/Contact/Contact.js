'use client';
import React, { useRef, useEffect } from 'react';
import styles from './Contact.module.scss';
import CustomFont from '@next/font/local';
import { slideEmail } from './animations';
import { Space_Mono } from '@next/font/google';
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});
import { gsap } from 'gsap';

const Contact = ({ timeline }) => {
  const section_3 = useRef(null);
  const emailBubble = useRef(null);
  const contactLink = useRef(null);
  // const horizontalBar = useRef(null);
  // const verticalBar = useRef(null);
  // const link = useRef(null);

  useEffect(() => {
    if (timeline) {
      timeline.add(
        slideEmail(emailBubble.current, section_3.current, contactLink.current)
      );
    }
  }, [timeline]);

  return (
    // <div>
    <section className={styles.section_3} ref={section_3} id='contact'>
      <div className={styles.section_3_wrapper}>
        <div className={styles.roundedSquare}>
          <h2 className={spaceMono.className}>Contact</h2>
        </div>

        <div className={styles.contactContainer} ref={emailBubble}>
          {/* test */}
          {/* <div className={styles.contactLink} ref={link}> */}
          <a href='mailto:olivier.huynh@yahoo.fr' ref={contactLink}>
            olivier.huynh@yahoo.fr
          </a>
          {/* </div> */}
        </div>
      </div>
    </section>
    // </div>
  );
};

export default Contact;
