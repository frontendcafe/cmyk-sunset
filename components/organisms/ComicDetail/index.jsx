import styles from './styles.module.scss';
import ComicInfo from 'components/molecules/ComicInfo';
import ComicDescription from 'components/molecules/ComicDescription';

const ComicDetail = ({
	infoSize = 'md',
	infoTitle = 'X-Men Legends #2',
	rating = '4/10',
	ratingSize = 'md',
	src = '',
	currency = '$',
	price = '500',
	priceSize = 'lg',
	descrSize = 'sm',
	descrTitle = 'Información del comic',
	content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, leo ut hendrerit consectetur, elit elit posuere orci, ac feugiat libero nisi eu eros. Quisque scelerisque tortor orci, id dapibus ligula ultrices a. Aenean rhoncus risus nec sapien placerat, id rhoncus magna suscipit.',
	pages = '152',
	creators = ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
}) => {
	return (
		<div className={styles.comicDetail}>
			<ComicInfo
				className={styles.comicInfo}
				size={infoSize}
				title={infoTitle}
				rating={rating}
				ratingSize={ratingSize}
				src={src}
				currency={currency}
				price={price}
				size={priceSize}
			/>
			<ComicDescription
				className={styles.comicDescr}
				size={descrSize}
				title={descrTitle}
				content={content}
				pages={pages}
				creators={creators}
			/>
		</div>
	);
};

export default ComicDetail;
