import { React, useRef } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const section_3 = useRef(null);

  return (
    <div>
      <section className={styles.section_3} ref={section_3}>
        <h2>CONTACT</h2>
      </section>
    </div>
  );
};

export default Contact;
