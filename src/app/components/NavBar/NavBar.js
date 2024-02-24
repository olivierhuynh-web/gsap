'use client';
import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';
import Image from 'next/image';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const NavBar = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    if (currentSection) {
      const element = document.getElementById(currentSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentSection]);

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.socialMedia__container}>
        <div>
          <Image
            src='/images/logo/github_logo.svg'
            width={15}
            height={15}
            alt='github logo'
            // className={styles.card_image}
          ></Image>
          <a>ok</a>
        </div>
      </div>
      <div className={styles.container__links}>
        <ul>
          <li>
            <a href='#presentation'>Présentation</a>
          </li>
          <li>
            <a href='#projets'>Projets</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
