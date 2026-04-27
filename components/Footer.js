import styles from './Footer.module.css';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>

      <div className={styles.copyrightContainer}>
        <p className={styles.wbaContainer}>
          Built by&nbsp;
          <span className={styles.wbaLinkContainer}>
            <a
              href='https://websitebuildersamerica.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.wbaLink}
            >
              Website Builders America
            </a>
          </span>
          &nbsp;
        </p>
        <p>&copy; 2025 by Dan Miller Wall Covering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
