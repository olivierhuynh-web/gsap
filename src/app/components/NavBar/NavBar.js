'use client';
import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Space_Mono } from 'next/font/google';
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

import CustomFont from '@next/font/local';
const signale = CustomFont({
  src: '../../fonts/Signale.otf',
});

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
    <header className={`${styles.container} ${inter.className}`}>
      <div className={styles.socialMedia__container}>
        <a
          href='https://github.com/olivierhuynh-web'
          className={styles.githubLogoWrapper}
        >
          <Image
            src='/images/logo/github_logo.svg'
            width={15}
            height={15}
            className={` ${styles.githubLogo}`}
            alt='github logo'
          />
        </a>
      </div>
      <div className={`${styles.container__links} ${signale.className}`}>
        <ul>
          <li>
            <a onClick={() => setCurrentSection('presentation')}>
              PRÉSENTATION
            </a>
          </li>
          <li>
            <a onClick={() => setCurrentSection('projets')}>PROJETS</a>
          </li>
          <li>
            <a onClick={() => setCurrentSection('contact')}>CONTACT</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
