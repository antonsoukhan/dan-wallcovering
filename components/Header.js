import React from 'react';
import styles from './Header.module.css';
import Button from './Button';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.image}
        src='/images/hero.jpg'
        alt='Elegant hallway with luxury teal striped wallpaper and chandelier installed by Dan Miller Wall Covering'
        fill
        priority
      />
      <div className={styles.textContainer}>
        <h1 className={styles.headingPrimary}>
          Professional Wallpaper & Wall Covering Installation
        </h1>
        <p className={styles.subheading}>Serving Southern California</p>
        <Button>Call for a Free Estimate!</Button>
      </div>
    </header>
  );
};

export default Header;
