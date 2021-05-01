import styles from './styles.module.scss';

import Image from 'components/atoms/Image'
import Title from 'components/atoms/Title'
import Subtitle from 'components/atoms/Subtitle'
import Paragraph from 'components/atoms/Paragraph'
import Price from 'components/atoms/Price'

export default function ItemCart({ className }) {
    return (
        <div className={`${styles.container}`}>
            <Image
                src={'/jade.jpg'}
                alt={"alt"}
                width={90}
                height={130}
            />
            <div className={`${styles.detail}`}>
                <Title
                    size='lg'
                    content='X-Men Legends #2'
                    className={`${styles.title}`}
                />
                <div className={`${styles.counterTotal}`}>
                    <div className={`${styles.counter}`}>
                        <button className={`${styles.btncounter} ${styles.red}`}>-</button>
                        <Paragraph size="md" content='10' className={`${styles.padding}`} />
                        <button className={`${styles.btncounter} ${styles.green} `}>+</button>
                    </div>
                    <div className={`${styles.total}`}>
                        <Paragraph size="sm" content='Total: ' className={`${styles.margin}`} />
                        <Price
                            size='md'
                            currency="$"
                            price={650}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}