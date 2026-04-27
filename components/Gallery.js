import styles from './Gallery.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  return (
    <section id='gallery' className={styles.section}>
      <h2 className={styles.headingSecondary}>Our Work</h2>

      <div className={styles.gridContainer}>
        <figure className={styles.imgContainer}>
          <Image
            width={500}
            height={500}
            src='/images/hero.jpg'
            alt='Elegant staircase hallway with teal striped wallpaper and chandelier'
            className={styles.img}
          />
        </figure>
        <figure className={styles.imgContainer}>
          <Image
            width={500}
            height={500}
            src='/images/b.jpg'
            alt='Luxury foyer with teal wallpaper, ornate gold mirrors and white decorative door'
            className={styles.img}
          />
        </figure>
        <figure className={styles.imgContainer}>
          <Image
            width={500}
            height={500}
            src='/images/c.jpg'
            alt='Grand entryway with teal wallpaper, arched transom window and ornate gold door hardware'
            className={styles.img}
          />
        </figure>
      </div>

      <div className={styles.linkBox}>
        <Link href='/gallery' className={styles.viewAll}>
          View Full Gallery &rarr;
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
