import React, {useState} from 'react';
import styles from './styles.module.scss'; 

const Button = ({size}) => {  

  const type = size === "lg" ? styles.bttn && styles.lg : size === "md" ? styles.bttn && styles.md : size === "sm" ? styles.sm && styles.bttn : ""

  return (
    <button className={`${type}`}>
      Comprar
    </button>
  );
};

export default Button;
