import styles from './Gallery.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const previewImages = [
  { src: '/images/4627.jpg', alt: 'Bedroom with botanical leaf wallpaper, wall-mounted TV and marble fireplace' },
  { src: '/images/4439.jpg', alt: 'Hallway with bold geometric interlocking circle wallpaper pattern in dark gray' },
  { src: '/images/4553.jpg', alt: 'Spiral staircase curved soffit covered in cream and gold floral damask wallpaper' },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id='gallery' className={styles.section}>
      <h2 className={styles.headingSecondary}>Our Work</h2>

      <div className={styles.gridContainer}>
        {previewImages.map((img, i) => (
          <figure
            key={i}
            className={styles.imgContainer}
            onClick={() => { setIndex(i); setOpen(true); }}
            style={{ cursor: 'pointer' }}
          >
            <Image
              width={500}
              height={500}
              src={img.src}
              alt={img.alt}
              className={styles.img}
            />
          </figure>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={previewImages.map((img) => ({ src: img.src }))}
      />

      <div className={styles.linkBox}>
        <Link href='/gallery' className={styles.viewAll}>
          View Full Gallery &rarr;
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
