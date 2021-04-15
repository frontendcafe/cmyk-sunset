import React, { useEffect, useState } from 'react';
import './styles.module.scss';


const Button = ({}) => {
  
  const [info, setInfo] = useState([]); 
  

  return (
    <button>
      {JSON.stringify(info)}
    </button>
  );
};

export default Button;
