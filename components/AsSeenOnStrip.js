import styles from './AsSeenOnStrip.module.css';

const AsSeenOnStrip = () => {
  return (
    <div className={styles.strip}>
      <span className={styles.label}>Featured on National Television</span>
      <span className={styles.divider}>|</span>
      <span className={styles.show}>Extreme Makeover: Home Edition &amp; Property Brothers</span>
    </div>
  );
};

export default AsSeenOnStrip;
