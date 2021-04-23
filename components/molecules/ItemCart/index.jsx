import styles from './styles.module.scss';

import Image from 'components/atoms/Image'
import Title from 'components/atoms/Title'
import Subtitle from 'components/atoms/Subtitle'
import Paragraph from 'components/atoms/Paragraph'
import Price from 'components/atoms/Price'

export default function ItemCart() {
    return (
        <div className={`${styles.container}`}>
            <Image
                src={'/public/vercel.svg'}
                alt={"alt"}
                width={100}
                height={300}
            />
            <div className={`${styles.info}`}>
                <Title
                    size='lg'
                    content='X-Men'
                />
                <Subtitle size='lg'>{"Legends #2"}</Subtitle>
                <div className={`${styles.counter} `}>
                    <button className={`${styles.btncounter} ${styles.red}`}>-</button>
                    <Paragraph size="lg" content='1' />
                    <button className={`${styles.btncounter} ${styles.green} `}>+</button>
                </div>
                <div className={`${styles.counter}`}>
                    <Paragraph size="lg" content='Total: ' />
                    <Price
                        size='md'
                        currency="$"
                        price={650}
                    />
                </div>
            </div>
        </div>
    )
}