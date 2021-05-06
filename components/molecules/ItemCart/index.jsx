import Image from 'components/atoms/Image';
import Paragraph from 'components/atoms/Paragraph';
import Price from 'components/atoms/Price';

import styles from './styles.module.scss';
import Subtitle from 'components/atoms/Subtitle/index';

export default function ItemCart({ imageUrl, title, quantity, total }) {
	return (
		<div className={`${styles.container}`}>
			{imageUrl && <Image src={imageUrl} className={styles.image}/>}
			<div className={`${styles.detail}`}>
				<Subtitle size='md' className={styles.title}>
					{title}
				</Subtitle>
				<div className={`${styles.counter}`}>
						<button className={`${styles.btncounter} ${styles.red}`}>-</button>
						<Paragraph
							size='md'
							content={quantity}
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
	);
}
