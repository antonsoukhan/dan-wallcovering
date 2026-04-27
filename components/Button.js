import styles from './Button.module.css';

const Button = ({ phoneNumber = '9518584019', children }) => {
  return (
    <div className={styles.buttonContainer}>
      <a href={`tel:${phoneNumber}`} className={styles.button}>
        {children}
      </a>
    </div>
  );
};

export default Button;
