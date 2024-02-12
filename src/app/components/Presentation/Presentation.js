import React, { useRef } from 'react';
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

const Presentation = () => {
  const section_1 = useRef(null);

  return (
    <div>
      <section className={styles.section_1} ref={section_1}>
        <div className={`${styles.roundedSquare1} ${rightGrotesk.className}`}>
          Olivier HUYNH
        </div>
        <div className={`${styles.roundedSquare2} ${spaceMono.className}`}>
          <span>🌸 Développeur web</span>
          <span>
            🌸 Ouvert pour collaborations et contrats de développement web
          </span>
        </div>
        <div className={`${styles.roundedSquare3} ${spaceMono.className}`}>
          <span>🌼 Spécialisé front-end</span>
          <span>🌼 JavaScript et TypeScript</span>
          <span>🌼 React et Next.js</span>
          <span>🌼 Node.js et PostreSQL</span>
          <span>🌼 GSAP</span>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
