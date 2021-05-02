import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import Image from 'components/atoms/Image';
import Price from 'components/atoms/Price';
import Button from 'components/atoms/Button'

const ComicInfo = ({
  defaultSize = 'md',
	title = 'X-Men Legends #2',
	rating = '4/10',
  ratingSize = 'md',
	src = '',
	currency = '$',
	price = '500',
  priceSize = 'lg'
}) => {
	return (
		<div className={styles.info}>
			<Title size={defaultSize} className={styles.title}>
				{title}
			</Title>
			<Paragraph content={`Calificación: ${rating}`} size={ratingSize} className={styles.rating} />
			<Image src={src} alt={title} className={styles.img}/>
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
					children='AGREGAR AL CARRITO'
				/>
		</div>
	);
};

export default ComicInfo;
