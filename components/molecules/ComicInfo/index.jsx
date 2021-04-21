import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import Image from 'components/atoms/Image';

const ComicInfo = ({
	title = 'X-Men Legends #2',
	rating = '4/10',
	src = '',
	currency = '$',
	price = '500',
}) => {
	return (
		<div className={styles.info}>
			<Title content={title} size={'md'} />
			<Paragraph content={`Calificación: ${rating}`} size={'md'} className={styles.rating} />
			{/* <Image src={src} alt={title}/> */}
			<div className={`${styles.img}`}></div>
			<Paragraph
				content={`${currency}${price}`}
				className={styles.bold}
				size={'xl'}
			/>
		</div>
	);
};

export default ComicInfo;
