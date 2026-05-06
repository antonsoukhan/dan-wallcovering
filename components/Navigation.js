import styles from './Navigation.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className={styles.flexContainer}>
      <Logo />

      <div className={styles.businessInfo}>
        <div className={styles.bisInfo}>
          <p className={styles.phone}>
            <span className={styles.iconWrap}>
              <FaPhoneAlt className={styles.icon} />
            </span>
            <a href='tel:9518584019' className={styles.tel}>
              (951) 858-4019
            </a>
          </p>
          <p className={styles.phone}>
            <span className={styles.iconWrap}>
              <FaPhoneAlt className={styles.icon} />
            </span>
            <a href='tel:7149311401' className={styles.tel}>
              (714) 931-1401
            </a>
          </p>
        </div>

        <div className={styles.menu}>
          <p className={styles.menuItem}>
            <Link href='/' className={styles.menuLink}>Home</Link>
          </p>
          <p className={styles.menuItem}>
            <Link href='/gallery' className={styles.menuLink}>Gallery</Link>
          </p>
          <p className={styles.menuItem}>
            <Link href='/contact' className={styles.menuLink}>Contact</Link>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
