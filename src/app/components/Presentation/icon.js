import React, { useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Presentation.module.scss';

const Icon = ({ onClick }) => {
  const iconRef = useRef(null); // Référence à l'élément SVG
  const borderRef = useRef(null); // Référence au contour
  const arrowRef = useRef(null); // Référence à la flèche

  // Gestionnaire d'événement pour le survol
  const handleMouseEnter = () => {
    // gsap.to(borderRef.current, {
    //   duration: 0.8,
    //   stroke: '#919090',
    //   ease: 'power1.out',
    // });
    gsap.to(arrowRef.current, {
      duration: 0.9,
      fill: 'black',
      ease: 'power1.out',
    });
  };

  // Gestionnaire d'événement pour quitter le survol
  const handleMouseLeave = () => {
    gsap.to(borderRef.current, {
      duration: 0.9,
      stroke: 'grey',
      ease: 'power1.out',
    });
    gsap.to(arrowRef.current, {
      duration: 0.9,
      fill: 'grey',
      ease: 'power1.out',
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <svg
        viewBox='0 0 47 55'
        className={styles.section1__wrapper__myIcon}
        ref={iconRef}
      >
        <path
          ref={borderRef} // Référence pour le contour
          className='w-hero-txt-icon-border-path'
          d='M23.5,1.5L23.5,1.5c12.2,0,22,9.8,22,22v8c0,12.2-9.8,22-22,22l0,0c-12.2,0-22-9.8-22-22v-8C1.5,11.3,11.3,1.5,23.5,1.5z'
          style={{
            strokeDasharray: '154.336',
            strokeDashoffset: 0,
            opacity: 1,
            fill: 'transparent', // Centre transparent
            stroke: 'grey', // Couleur du stroke par défaut
            strokeWidth: '1', // Épaisseur du contour
          }}
        />
        {/* Flèche vers le bas */}
        <path
          ref={arrowRef} // Référence pour la flèche
          d='M27,29.4l-0.2-0.2l-0.3-0.3l-0.2-0.2l-0.2,0.2l0.2,0.2l0,0l-0.2-0.2l-2.7,2.7V22v-0.2h-0.2h-0.4h-0.2V22v9.6l-2.7-2.7l-0.2,0.2h0l0.2-0.2l-0.2-0.2l-0.2,0.2l-0.3,0.3L19,29.4l0.2,0.2l3.2,3.2l0,0l0.2,0.2l0.2-0.2l0,0l-0.2,0.2l0.3,0.3L23,33h0l0,0l-0.1,0.1l0.2,0.2l0,0l0,0l0.2-0.2L23,33l0,0l0,0l0.2,0.2l0.3-0.3l-0.2-0.2l0,0l0,0l0.1,0.1l0.2-0.2l0,0l3.2-3.2L27,29.4z M23.3,32.7L23.3,32.7L23.3,32.7L23.3,32.7L23.3,32.7z'
          style={{
            fill: 'grey', // Couleur de remplissage par défaut
          }}
        />
      </svg>
    </div>
  );
};

export default Icon;
