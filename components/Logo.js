import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link href='/' className={styles.logo}>
      <Image
        src='/images/logo.jpg'
        alt='Dan Miller Wall Covering logo'
        width={220}
        height={80}
        className={styles.logoImage}
        priority
      />
    </Link>
  );
}
