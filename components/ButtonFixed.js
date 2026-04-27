import styles from './ButtonFixed.module.css';

const ButtonFixed = () => {
  return (
    <div className={styles.buttonContainer}>
      <a href='tel:9518584019' className={styles.button}>
        Call Now!
      </a>
    </div>
  );
};

export default ButtonFixed;
