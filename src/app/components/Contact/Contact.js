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
  // const horizontalBar = useRef(null);
  // const verticalBar = useRef(null);
  const link = useRef(null);

  useEffect(() => {
    if (timeline) {
      timeline.add(slideContact(link.current, section_3.current));
    }
  }, [timeline]);

  return (
    <div>
      <section className={styles.section_3} ref={section_3} id='contact'>
        <h2 className={rightGrotesk.className}>Contact</h2>
        {/* <div className={styles.horizontalBar}>
          <div className={styles.verticalBar}></div>
        </div> */}
        <div className={styles.contactContainer}>
          <div className={styles.contactLink} ref={link}>
            <a href='mailto:olivier.huynh@yahoo.fr'>olivier.huynh@yahoo.fr</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
