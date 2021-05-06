import Image from 'components/atoms/Image';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import Price from 'components/atoms/Price';

import styles from './styles.module.scss';

export default function ItemCart({ imageUrl, title, count, total }) {
	return (
		<div className={`${styles.container}`}>
			{imageUrl && <Image src={imageUrl} alt={'alt'} width={90} height={130} />}
			<div className={`${styles.detail}`}>
				<Title size='lg' className={styles.title}>
					{title}
				</Title>
				<div className={`${styles.counterTotal}`}>
					<div className={`${styles.counter}`}>
						<button className={`${styles.btncounter} ${styles.red}`}>-</button>
						<Paragraph
							size='md'
							content={count}
							className={`${styles.padding}`}
						/>
						<button className={`${styles.btncounter} ${styles.green} `}>
							+
						</button>
					</div>
					<div className={`${styles.total}`}>
						<Paragraph
							size='sm'
							content='Total'
							className={`${styles.margin}`}
						/>
						<Price size='md' currency='$' price={total} />
					</div>
				</div>
			</div>
		</div>
	);
}
