import { useContext, useState } from 'react';

import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import Image from 'components/atoms/Image';
import Price from 'components/atoms/Price';
import Button from 'components/atoms/Button';
import { ShoppingContext } from 'context/ShoppingContext';

import styles from './styles.module.scss';

const addComic = 'AGREGAR AL CARRITO';
const comicAdded = 'AGREGADO AL CARRITO';

const ComicInfo = ({
	id,
	defaultSize = 'md',
	title = 'X-Men Legends #2',
	rating = '4/10',
	ratingSize = 'md',
	src = '',
	currency = '$',
	price = '500',
	priceSize = 'lg',
}) => {
	const { addItemCart } = useContext(ShoppingContext);
	const [buttonText, setButtonText] = useState(addComic);

	const handleAddItem = () => {
		addItemCart({
			total: price,
			imageUrl: src,
			title,
			price,
			idMarvel: id,
			quantity: 1,
		});

		setButtonText(comicAdded);

		setTimeout(() => {
			setButtonText(addComic);
		}, 2500);
	}

	return (
		<div className={styles.info}>
			<Title size={defaultSize} className={styles.title}>
				{title}
			</Title>
			<Paragraph
				content={`Calificación: ${rating}`}
				size={ratingSize}
				className={styles.rating}
			/>
			<Image src={src} alt={title} className={styles.img} />
			<Price
				currency={currency}
				price={price}
				className={styles.comicInfoPrice}
				size={priceSize}
			/>
			<Button
				className={styles.buyButton}
				size='md'
				color='green'
				onClick={handleAddItem}
			>
				{buttonText}
			</Button>
		</div>
	);
};

export default ComicInfo;
