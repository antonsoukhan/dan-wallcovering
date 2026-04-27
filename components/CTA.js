import styles from './CTA.module.css';
import Button from './Button';

const CTA = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textInnerContainer}>
        <h2 className={styles.headingSecondary}>
          Ready to Transform Your Space?{' '}
          <span className={styles.bold}>Call for a Free Estimate</span> Today!
        </h2>
      </div>
      <div className={styles.buttonContainer}>
        <Button>Call Dan Now!</Button>
      </div>
    </section>
  );
};

export default CTA;
