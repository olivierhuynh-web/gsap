'use client';
import gsap from 'gsap';
import React, { useLayoutEffect, useEffect, useRef } from 'react';
import styles from './page.module.css';
import './reset.css';
import Image from 'next/image';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function index() {
  const ref = useRef();
  const container = useRef();
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          y: 0,
        },
        {
          y: -50,
          duration: 0.2,
          ease: 'bounce.out', // Changez 'power2.inOut' en 'bounce.out'
          repeat: 3, // Changez -1 en le nombre de fois que vous voulez que l'animation se répète
          yoyo: true,
        }
      );
      gsap.set(container.current, { backgroundColor: 'yellow' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={container}>
      <div ref={ref} className={styles.myH1}>
        <Image
          src='/animation_female_vagina_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1643693_o-removebg-preview.png' // Chemin vers votre image
          alt='vagina'
          width={400} // Largeur de l'image
          height={300} // Hauteur de l'image
        />{' '}
      </div>
    </div>
  );
}
