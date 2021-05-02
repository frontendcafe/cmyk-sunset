import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import Paragraph from 'components/atoms/Paragraph';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

import styles from './styles.module.scss';

function AppInfo() {
  return (
    <div className={styles.container}>
      <Title hasBg children="Marvel Store" className={styles.title}/>
      <Paragraph>
        Una aplicacion web para comprar comics de marvel. Podrás ingresar con tu usuario, encontrar el comic que estas buscando y llevarlo en tu carrito!
        <Button
          size="sm"
          className={styles.repoButton}
          onClick={() => window.location.href='https://github.com/frontendcafe/cmyk-sunset#cmyksunset-'}
        >
          <AiFillGithub />
          Github
          </Button>
      </Paragraph>
    </div>
  )
}

export default AppInfo;
