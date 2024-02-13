import React from 'react';
import Image from 'next/image';

import styles from './Skills.module.scss';
import CustomFont from '@next/font/local';
import { Space_Mono } from '@next/font/google';
const rightGrotesk = CustomFont({
  src: '../../fonts/PPRightGrotesk-CompactDark.otf',
});
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

import skillCategories from '../../db/skills.json';

const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <div className={`${styles.title} ${rightGrotesk.className}`}>
        <h2>Skills</h2>
      </div>
      <div className={styles.skillsWrapper}>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.skill}>
            <div className={styles.skillCategory}>
              <h4 className={rightGrotesk.className}>{category.title}</h4>
              {/* <div className={styles.skillContent}> */}
              {category.items.map((item) => (
                <div key={item.name} className={`${spaceMono.className} `}>
                  <Image
                    src={item.logo}
                    width={15}
                    height={15}
                    alt={`${item.name} logo`}
                    className={styles.card_image}
                  />{' '}
                  {item.name}
                </div>
              ))}
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
