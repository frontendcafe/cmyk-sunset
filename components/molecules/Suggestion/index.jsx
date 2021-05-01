import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Image from 'components/atoms/Image';
import Button from 'components/atoms/Button';

const Suggestion = ({
	title = 'X-Men Legends #2',
	titleSize = 'md',
	src = '',
	className,
}) => {
	return (
		<div className={`${styles.suggestion} ${className}`}>
			<div className={styles.suggestionBox}>
				<div className={styles.leftCol}>
					<div className={`${styles.img}`}></div>
				</div>
				<div className={styles.rightCol}>
					<Title content={title} size={titleSize} className={styles.title} />
					<Button
						className={styles.buyButton}
						size='sm'
						color='red'
						children='COMPRAR'
					/>
				</div>
			</div>
		</div>
	);
};

export default Suggestion;
