import styles from './styles.module.scss'; 

const Button = ({size, disabled, children, color}) => {  

  const btnSize = size === "lg" ? styles.lg : size === "md" ? styles.md : size === "sm" ? styles.sm : ""

  const colorbg = color === "green" ? styles.green : color === "red" ? styles.red : "" 

  return (
    <button 
      className={`${btnSize} ${styles.btn} ${colorbg}`} 
      disabled={disabled}
    >{children}
    </button>
  );
};

export default Button;
