import Head from 'next/head';
import Footer from '@/components/Footer';
import ButtonFixed from '@/components/ButtonFixed';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './gallery.module.css';

const galleryImages = [
  {
    src: '/images/4627.jpg',
    alt: 'Bedroom with botanical leaf wallpaper, wall-mounted TV and marble fireplace',
    caption: 'Botanical Wallpaper — Bedroom Feature Wall',
  },
  {
    src: '/images/4628.jpg',
    alt: 'Corner view of bedroom showing botanical leaf wallpaper wrapping the entire room',
    caption: 'Botanical Print — Full Room Installation',
  },
  {
    src: '/images/4439.jpg',
    alt: 'Hallway with bold geometric interlocking circle wallpaper pattern in dark gray',
    caption: 'Geometric Pattern — Residential Hallway',
  },
  {
    src: '/images/4553.jpg',
    alt: 'Spiral staircase curved soffit covered in cream and gold floral damask wallpaper',
    caption: 'Damask Wallpaper — Spiral Staircase Soffit',
  },
  {
    src: '/images/4426.jpg',
    alt: 'Laundry room with silver embossed damask wallpaper surrounding a white arched door',
    caption: 'Embossed Damask — Laundry Room',
  },
  {
    src: '/images/4447.jpg',
    alt: 'Curved staircase arch with floral damask wallpaper in dark charcoal tones',
    caption: 'Damask Wallpaper — Staircase Arch',
  },
  {
    src: '/images/4457.jpg',
    alt: 'Curved interior wall covered in rich gold and bronze damask wallpaper pattern',
    caption: 'Gold Damask — Curved Wall Installation',
  },
  {
    src: '/images/4459.jpg',
    alt: 'Bright room with gold amber damask wallpaper and large multi-pane windows',
    caption: 'Gold Damask — Residential Parlor',
  },
  {
    src: '/images/4465.jpg',
    alt: 'Library with gold damask wallpaper, dark wood columns and decorative railing',
    caption: 'Gold Damask — Library and Study',
  },
  {
    src: '/images/4469.jpg',
    alt: 'Spacious home office with cream and gold damask wallpaper and panoramic windows',
    caption: 'Damask Wallpaper — Home Office',
  },
  {
    src: '/images/4437.jpg',
    alt: 'Open kitchen and bar area with subtle textured wall covering and wood beam ceiling',
    caption: 'Textured Wall Covering — Residential Kitchen',
  },
  {
    src: '/images/4536.jpg',
    alt: 'Large commercial wall mural installation at Big Air trampoline park',
    caption: 'Commercial Wall Mural — Big Air Trampoline Park',
  },
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
