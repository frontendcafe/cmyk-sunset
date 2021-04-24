import styles from './styles.module.scss';

import Image from 'components/atoms/Image'
import Title from 'components/atoms/Title'
import Subtitle from 'components/atoms/Subtitle'
import Paragraph from 'components/atoms/Paragraph'
import Price from 'components/atoms/Price'

export default function ItemCart() {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.info}`}>
                <div className={`${styles.border}`}>
                    <Image
                        src={'/public/vercel.svg'}
                        alt={"alt"}
                        width={100}
                        height={300}
                    />
                </div>
                <div className={`${styles.detail}`}>
                    <Title
                        size='lg'
                        content='X-Men'
                    />
                    <Subtitle size='lg'>{"Legends #2"}</Subtitle>
                    <div className={`${styles.counter} `}>
                        <button className={`${styles.btncounter} ${styles.red}`}>-</button>
                        <Paragraph size="xl" content='10' />
                        <button className={`${styles.btncounter} ${styles.green} `}>+</button>
                    </div>
                </div>
            </div>
            <div className={`${styles.total}`}>
                <Paragraph size="md" content='Total: ' />
                <Price
                    size='lg'
                    currency="$"
                    price={650}
                />
            </div>
        </div>
    )
}