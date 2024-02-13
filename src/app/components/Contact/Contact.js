import React, { useRef, useEffect } from 'react';
import styles from './Contact.module.scss';
import CustomFont from '@next/font/local';
import { slideContact } from './animations';
const rightGrotesk = CustomFont({
  src: '../../fonts/PPRightGrotesk-CompactDark.otf',
});
import { gsap } from 'gsap';

const Contact = ({ timeline }) => {
  const section_3 = useRef(null);
  const horizontalBar = useRef(null);
  const verticalBar = useRef(null);

  useEffect(() => {
    if (timeline) {
      timeline.add(slideContact(horizontalBar.current, section_3.current));
    }
  }, [timeline]);

  return (
    <div>
      <section className={styles.section_3} ref={section_3}>
        <h2 className={rightGrotesk.className}>Comment se contacter ?</h2>
        <div className={styles.horizontalBar} ref={horizontalBar}>
          <div className={styles.verticalBar} ref={verticalBar}></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
