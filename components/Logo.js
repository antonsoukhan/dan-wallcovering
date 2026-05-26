import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link href='/' className={styles.logo}>
      <Image
        src='/images/logoNoName.jpg'
        alt='Dan Miller Wall Covering icon'
        width={80}
        height={80}
        className={styles.logoIcon}
        priority
      />
      <div className={styles.logoText}>
        <span className={styles.logoTop}>Dan Miller</span>
        <span className={styles.logoBottom}>Wall Covering</span>
      </div>
    </Link>
  );
}
