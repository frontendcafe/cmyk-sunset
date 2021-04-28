import styles from './styles.module.scss';
import ComicInfo from 'components/molecules/ComicInfo';
import ComicDescription from 'components/molecules/ComicDescription';
import Button from 'components/atoms/Button';

const ComicDetail = () => {
	return (
		<div className={styles.comicDetail}>
			<ComicInfo className={styles.comicInfo} />
			<Button
				className={styles.buyButton}
				size='md'
				color='green'
				children='AGREGAR AL CARRITO'
			/>
			<ComicDescription className={styles.comicDescr} />
		</div>
	);
};

export default ComicDetail;

// size, disabled, children, color
// defaultSize = 'md',
// 	title = 'X-Men Legends #2',
// 	rating = '4/10',
//   ratingSize = 'md',
// 	src = '',
// 	currency = '$',
// 	price = '500',
//   priceSize = 'lg'

// defaultSize = 'sm',
// 	title = 'Información del comic',
// 	content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, leo ut hendrerit consectetur, elit elit posuere orci, ac feugiat libero nisi eu eros. Quisque scelerisque tortor orci, id dapibus ligula ultrices a. Aenean rhoncus risus nec sapien placerat, id rhoncus magna suscipit.',
// 	pages = '152',
// 	creators = ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],