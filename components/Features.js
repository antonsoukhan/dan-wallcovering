import styles from './Features.module.css';
import { BsPersonFillCheck } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';
import { MdDesignServices } from 'react-icons/md';

const Features = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.headingSecondary}>Why Choose Dan Miller</h2>

      <ul className={styles.gridContainer}>
        <li className={styles.gridItem}>
          <span className={styles.iconBox}>
            <BsPersonFillCheck className={styles.icon} />
          </span>
          <h3 className={styles.headingTertiary}>Expert Installation</h3>
          <p className={styles.text}>
            <span className={styles.bold}>Years of professional experience</span> in
            all types of wallpaper and wall covering — from residential to luxury estates
          </p>
        </li>

        <li className={styles.gridItem}>
          <span className={styles.iconBox}>
            <BsCurrencyDollar className={styles.icon} />
          </span>
          <h3 className={styles.headingTertiary}>Free Estimates</h3>
          <p className={styles.text}>
            <span className={styles.bold}>No-obligation estimates</span> so
            you can plan your project with confidence and no surprises
          </p>
        </li>

        <li className={styles.gridItem}>
          <span className={styles.iconBox}>
            <HiSparkles className={styles.icon} />
          </span>
          <h3 className={styles.headingTertiary}>Flawless Finish</h3>
          <p className={styles.text}>
            Every seam is{' '}
            <span className={styles.bold}>perfectly matched and aligned</span> — we
            take the time to do it right the first time
          </p>
        </li>

        <li className={styles.gridItem}>
          <span className={styles.iconBox}>
            <MdDesignServices className={styles.icon} />
          </span>
          <h3 className={styles.headingTertiary}>All Wall Covering Types</h3>
          <p className={styles.text}>
            Wallpaper,{' '}
            <span className={styles.bold}>grasscloth, fabric, murals,
            and specialty coverings</span> — we work with any material
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Features;
