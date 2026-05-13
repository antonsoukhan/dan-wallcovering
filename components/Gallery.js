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
            src='/images/4627.jpg'
            alt='Bedroom with botanical leaf wallpaper, wall-mounted TV and marble fireplace'
            className={styles.img}
          />
        </figure>
        <figure className={styles.imgContainer}>
          <Image
            width={500}
            height={500}
            src='/images/4439.jpg'
            alt='Hallway with bold geometric interlocking circle wallpaper pattern in dark gray'
            className={styles.img}
          />
        </figure>
        <figure className={styles.imgContainer}>
          <Image
            width={500}
            height={500}
            src='/images/4553.jpg'
            alt='Spiral staircase curved soffit covered in cream and gold floral damask wallpaper'
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
