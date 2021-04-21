import styles from './styles.module.scss';
import Paragraph from 'components/atoms/Paragraph';

const Review = ({
	name = 'Galindez',
	rating = '7.6 de 10',
	comment = '"Gran Comic"',
}) => {
	return (
		<div className={styles.box}>
			<div className={styles.firstLine}>
				<Paragraph content={name} />
				<Paragraph content={'-'} />
				<Paragraph content={rating} />
			</div>
			<div className={styles.secondLine}>
				<Paragraph content={comment} />
			</div>
		</div>
	);
};

export default Review;
