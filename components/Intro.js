import Image from 'next/image';
import styles from './Intro.module.css';
import Button from './Button';

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.headingSecondary}>
          Transforming Walls Into Works of Art
        </h2>
        <p className={styles.text}>
          Dan Miller Wall Covering brings decades of hands-on expertise to every
          project. Whether it&apos;s a classic pattern for a traditional home, bold
          grasscloth for a modern interior, or a delicate fabric wall covering
          for a luxury estate, we handle every installation with precision and care.
        </p>
        <p className={styles.text}>
          We work closely with homeowners, interior designers, and contractors
          throughout Southern California to deliver flawless results — on time
          and on budget. Every surface is properly prepared, every seam is
          perfectly matched, and every project is finished to the highest standard.
        </p>
        <Button>Call for a Free Estimate!</Button>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src='/images/b.jpg'
          alt='Luxury foyer with teal wallpaper, ornate gold mirrors and decorative door hardware'
          fill
          className={styles.img}
        />
      </div>
    </section>
  );
};

export default Intro;
