'use client';
// Importez les modules nécessaires
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin'; // Importez TextPlugin
import { useLayoutEffect, useRef } from 'react';
import styles from './page.module.css';

gsap.registerPlugin(TextPlugin); // Enregistrez le plugin

export default function Index() {
  const ref = useRef();

  useLayoutEffect(() => {
    // Créez une timeline GSAP pour l'animation du texte
    const tl = gsap.timeline();

    tl.fromTo(
      ref.current,
      {
        duration: 2,
        // text: 'This is the new text',
        ease: 'none',
      },
      {
        duration: 2, // Durée pour chaque lettre
        text: 'This is the new text lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ease: 'power1.inOut',
        // onComplete: addLetters,
      }
    );

    // Revert l'animation à la fin du composant
    return () => tl.revert();
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.text} ref={ref}>
        {/* Votre texte initial */}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt... */}
      </span>
    </div>
  );
}
