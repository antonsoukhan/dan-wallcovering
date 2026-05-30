import Image from 'next/image';
import styles from './TvFeatures.module.css';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const tvPhotos = [
  {
    src: '/images/tv-living-room.jpg',
    alt: 'Residential living room with grasscloth wallpaper and leather sofa featured on Extreme Makeover Home Edition TV show',
    caption: 'Living Room — Grasscloth Wall Covering',
  },
  {
    src: '/images/tv-dining-room.jpg',
    alt: 'Elegant dining room with grasscloth wallpaper and chandelier featured on Extreme Makeover Home Edition TV show',
    caption: 'Dining Room — Grasscloth Wall Covering',
  },
  {
    src: '/images/tv-kitchen.jpg',
    alt: 'Open kitchen with grasscloth wallpaper and custom wood cabinetry featured on Extreme Makeover Home Edition TV show',
    caption: 'Kitchen & Cabinetry — Grasscloth Wall Covering',
  },
];

const TvFeatures = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = tvPhotos.map((img) => ({ src: img.src }));

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>As Seen On National Television</p>
          <h2 className={styles.heading}>Featured on<br />Extreme Makeover: Home Edition<br />&amp; Property Brothers</h2>
          <p className={styles.body}>
            Dan Miller&apos;s wall covering craftsmanship was selected to be featured
            on <em>Extreme Makeover: Home Edition</em> — one of America&apos;s most-watched
            home design shows. The grasscloth installations seen here were completed
            as part of a full home transformation for a deserving family. His work
            has also been featured on <em>Property Brothers</em>.
          </p>
        </div>

        <div className={styles.grid}>
          {tvPhotos.map((item, i) => (
            <figure key={i} className={styles.figureContainer} onClick={() => { setIndex(i); setOpen(true); }} style={{ cursor: 'pointer' }}>
              <div className={styles.imgContainer}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.img}
                />
              </div>
              <figcaption className={styles.caption}>{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  );
};

export default TvFeatures;
