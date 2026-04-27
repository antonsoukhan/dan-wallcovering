import Head from 'next/head';
import Footer from '@/components/Footer';
import ButtonFixed from '@/components/ButtonFixed';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './gallery.module.css';

const galleryImages = [
  {
    src: '/images/hero.jpg',
    alt: 'Elegant staircase hallway with luxury teal striped wallpaper and chandelier',
    caption: 'Classic Striped Wallpaper — Residential Foyer',
  },
  {
    src: '/images/b.jpg',
    alt: 'Luxury foyer with teal wallpaper, ornate gold mirrors and white decorative door',
    caption: 'Luxury Entryway — Wall Covering with Border Detail',
  },
  {
    src: '/images/c.jpg',
    alt: 'Grand entryway with teal wallpaper, arched transom window and gold door hardware',
    caption: 'Grand Foyer — Full Room Wall Covering Installation',
  },
];

const GalleryPage = () => {
  return (
    <>
      <Head>
        <title>Gallery | Dan Miller Wall Covering</title>
        <meta name='description' content='Browse our portfolio of professional wallpaper and wall covering installations by Dan Miller Wall Covering in Southern California.' />
        <link rel='canonical' href='https://www.danmillerwallcovering.com/gallery' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.danmillerwallcovering.com/gallery' />
        <meta property='og:title' content='Gallery | Dan Miller Wall Covering' />
        <meta property='og:description' content='Browse our portfolio of professional wallpaper and wall covering installations.' />
        <meta property='og:image' content='https://www.danmillerwallcovering.com/images/hero.jpg' />
        <meta property='og:site_name' content='Dan Miller Wall Covering' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Gallery | Dan Miller Wall Covering' />
        <meta name='twitter:description' content='Browse our portfolio of professional wallpaper and wall covering installations.' />
        <meta name='twitter:image' content='https://www.danmillerwallcovering.com/images/hero.jpg' />
      </Head>

      <main>
        <div className={styles.btnFixedBox}>
          <ButtonFixed />
        </div>

        <section className={styles.gallerySection}>
          <div className={styles.heroText}>
            <h1 className={styles.heading}>Our Portfolio</h1>
            <p className={styles.subheading}>
              Every project is a testament to precision, craftsmanship, and a passion for beautiful walls.
            </p>
          </div>

          <div className={styles.grid}>
            {galleryImages.map((img, i) => (
              <figure key={i} className={styles.figureContainer}>
                <div className={styles.imgContainer}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={styles.img}
                  />
                </div>
                <figcaption className={styles.caption}>{img.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className={styles.ctaBox}>
            <p className={styles.ctaText}>Love what you see? Let&apos;s talk about your project.</p>
            <Button>Call (951) 858-4019</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
