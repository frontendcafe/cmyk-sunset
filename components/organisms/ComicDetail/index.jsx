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
