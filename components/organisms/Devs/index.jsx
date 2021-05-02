import Dev from 'components/molecules/Dev';
import Subtitle from 'components/atoms/Subtitle';

import styles from './styles.module.scss';

function Devs({devs}) {
  return (
    <div className={styles.container}>
      <Subtitle hasBg size="md" className={styles.subtitle}>
        Devs
      </Subtitle>
        <ul className={styles.list}>  
          {devs && devs.map(dev => (
            <li key={dev.id}>
                <Dev developer={dev}/>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Devs;
