import Head from 'next/head';
import Footer from '@/components/Footer';
import ButtonFixed from '@/components/ButtonFixed';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import styles from './contact.module.css';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Dan Miller Wall Covering</title>
        <meta name='description' content='Contact Dan Miller Wall Covering for professional wallpaper installation in Southern California. Call (951) 858-4019 for a free estimate.' />
        <link rel='canonical' href='https://www.danmillerwallcovering.com/contact' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.danmillerwallcovering.com/contact' />
        <meta property='og:title' content='Contact | Dan Miller Wall Covering' />
        <meta property='og:description' content='Contact Dan Miller Wall Covering for a free estimate on professional wallpaper installation.' />
        <meta property='og:image' content='https://www.danmillerwallcovering.com/images/hero.jpg' />
        <meta property='og:site_name' content='Dan Miller Wall Covering' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Contact | Dan Miller Wall Covering' />
        <meta name='twitter:description' content='Contact Dan Miller Wall Covering for a free estimate on professional wallpaper installation.' />
        <meta name='twitter:image' content='https://www.danmillerwallcovering.com/images/hero.jpg' />
      </Head>

      <main>
        <div className={styles.btnFixedBox}>
          <ButtonFixed />
        </div>

        <section className={styles.contactSection}>
          <div className={styles.heroText}>
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.subheading}>
              Ready to elevate your walls? Dan is happy to answer any questions and provide a free, no-obligation estimate.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <span className={styles.iconBox}>
                <FaPhoneAlt className={styles.icon} />
              </span>
              <h2 className={styles.cardTitle}>Call or Text</h2>
              <p className={styles.cardText}>The fastest way to reach Dan</p>
              <a href='tel:9518584019' className={styles.phoneLink}>
                (951) 858-4019
              </a>
              <a href='tel:7149311401' className={styles.phoneLink}>
                (714) 931-1401
              </a>
            </div>

            <div className={styles.card}>
              <span className={styles.iconBox}>
                <FaMapMarkerAlt className={styles.icon} />
              </span>
              <h2 className={styles.cardTitle}>Service Area</h2>
              <p className={styles.cardText}>
                Proudly serving homeowners, interior designers, and contractors throughout
              </p>
              <p className={styles.cardHighlight}>Southern California</p>
            </div>

            <div className={styles.card}>
              <span className={styles.iconBox}>
                <MdAccessTime className={styles.icon} />
              </span>
              <h2 className={styles.cardTitle}>Hours</h2>
              <p className={styles.cardText}>Available for estimates and consultations</p>
              <p className={styles.cardHighlight}>Mon – Sat, 8am – 6pm</p>
            </div>
          </div>

          <div className={styles.callToAction}>
            <h2 className={styles.ctaHeading}>
              Call <a href='tel:9518584019' className={styles.ctaPhone}>(951) 858-4019</a> or <a href='tel:7149311401' className={styles.ctaPhone}>(714) 931-1401</a> for a Free Estimate
            </h2>
            <p className={styles.ctaSub}>No job too small or too large — we do it all with care.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
