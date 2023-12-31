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
          color: 'blue',
          y: '0vw',
        },
        {
          color: 'red',
          duration: 1.6,
          x: '20vw',
          // rotate: 360,
          ease: 'easeInOut',
          // delay: 1,
          // repeat: -1,
        }

        // const moveEl = (xVal, yVal) => {
        //   gsap.to(divRef.current, 0.5, { x: "+=" + xVal, y: "+=" + yVal });
        // };
      );
      gsap.set(container.current, { backgroundColor: 'yellow' });
      gsap.fromTo(
        container.current,
        {
          backgroundColor: 'yellow',
          duration: 1.6,
          // ease: 'easeInOut',
        },
        {
          backgroundColor: 'green',
          duration: 1.6,
          ease: 'bounce.out',
          repeat: -1,
          yoyo: true,
        }
      );
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
