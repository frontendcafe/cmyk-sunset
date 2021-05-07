import { useContext } from 'react';

import Image from 'components/atoms/Image';
import Paragraph from 'components/atoms/Paragraph';
import Price from 'components/atoms/Price';
import Subtitle from 'components/atoms/Subtitle/index';
import { ShoppingContext } from 'context/ShoppingContext';

import styles from './styles.module.scss';

export default function ItemCart({
	idMarvel,
	imageUrl,
	title,
	quantity,
	total,
	price
}) {
	const { removeItemCart, addItemCart } = useContext(ShoppingContext);

	const handleAddItem = () =>
		addItemCart({
			total: price,
			quantity: 1,
			idMarvel,
			imageUrl,
			title,
			price,
		});

	const handleRemoveItem = () => removeItemCart(idMarvel);

	return (
		<div className={`${styles.container}`} key={idMarvel}>
			{imageUrl && <Image src={imageUrl} className={styles.image} />}
			<div className={`${styles.detail}`}>
				<Subtitle size='md' className={styles.title}>
					{title}
				</Subtitle>
				<div className={`${styles.counter}`}>
					<button
						className={`${styles.btncounter} ${styles.red}`}
						onClick={handleRemoveItem}>
						-
					</button>
					<Paragraph
						size='md'
						content={quantity}
						className={`${styles.padding}`}
					/>
					<button
						className={`${styles.btncounter} ${styles.green}`}
						onClick={handleAddItem}>
						+
					</button>
				</div>
				<div className={`${styles.total}`}>
					<Paragraph size='sm' content='Total' className={`${styles.margin}`} />
					<Price size='md' currency='$' price={total} />
				</div>
			</div>
		</div>
	);
}
