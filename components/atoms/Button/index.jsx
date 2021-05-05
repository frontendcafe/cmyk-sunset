import styles from './styles.module.scss';

const Button = ({ size, disabled, children, color, className, onClick, type }) => {
  const btnSize = size === "lg" ? styles.lg : size === "md" ? styles.md : size === "sm" ? styles.sm : ""

  const colorbg = color === "green" ? styles.green : color === "red" ? styles.red : ""

  return (
    <button
      className={`${btnSize} ${styles.btn} ${colorbg} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >{children}
    </button>
  );
};

export default Button;
