import React from 'react';

import withLoading from 'components/atoms/WithLoading';

import styles from './styles.module.scss';

function Container({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default withLoading(Container);
