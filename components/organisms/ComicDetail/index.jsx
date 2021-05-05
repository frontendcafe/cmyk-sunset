import styles from './styles.module.scss';
import ComicInfo from 'components/molecules/ComicInfo';
import ComicDescription from 'components/molecules/ComicDescription';

const ComicDetail = ({
	infoSize = 'md',
	infoTitle = '',
	rating = '',
	ratingSize = 'md',
	src = '',
	currency = '$',
	price = '',
	priceSize = 'lg',
	descrSize = 'sm',
	descrTitle = 'Información del comic',
	content = '',
	pages = '',
	creators = [],
  comic
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
        comic={comic}
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
