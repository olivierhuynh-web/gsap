'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Contact.module.scss';
import CustomFont from '@next/font/local';
import {
  slideEmail,
  toBlue,
  // contactLinkToGreen
} from './animations';
import { Space_Mono } from '@next/font/google';
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});
import { gsap } from 'gsap';

const Contact = ({ timeline }) => {
  const [isHovered, setIsHovered] = useState(false);

  const section_3 = useRef(null);
  const emailBubble = useRef(null);
  const contactLink = useRef(null);
  const blueDot = useRef(null);
  // const horizontalBar = useRef(null);
  // const verticalBar = useRef(null);
  // const link = useRef(null);

  useEffect(() => {
    if (timeline) {
      // contactLinkToGreen(contactLink.current);

      timeline.add(
        slideEmail(emailBubble.current, section_3.current, contactLink.current),
        toBlue(blueDot.current, section_3.current)
      );
    }
  }, [timeline]);

  return (
    // <div>
    <section className={styles.section_3} ref={section_3} id='contact'>
      <div className={styles.section_3_wrapper}>
        <div className={styles.contactContainer}>
          <div className={`${spaceMono.className} `}>
            {' '}
            <span className={styles.bluedot} ref={blueDot}>
              ●{' '}
            </span>
            <span className={styles.contactLabel}>Contact</span>
          </div>
        </div>

        <div className={styles.emailContainer} ref={emailBubble}>
          {/* test */}
          {/* <div className={styles.contactLink} ref={link}> */}
          <a
            href='mailto:olivier.huynh@yahoo.fr'
            ref={contactLink}
            // onMouseEnter={contactLinkToGreen}
          >
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
