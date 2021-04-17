import styles from './styles.module.scss'; 

const Button = ({size, disabled, children}) => {  

  const btnSize = size === "lg" ? styles.lg : size === "md" ? styles.md : size === "sm" ? styles.sm : ""

  return (
    <button 
      className={`${btnSize} ${styles.btn}`} 
      disabled={disabled}
    >{children}
    </button>
  );
};

export default Button;
