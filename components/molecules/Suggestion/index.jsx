import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Image from 'components/atoms/Image';
import Button from 'components/atoms/Button';

const Suggestion = ({
	title = 'X-Men Legends #2',
	titleSize = 'md',
	src = '',
	className,
	onClick
}) => {
	return (
		<div className={`${styles.suggestion} ${className}`}>
			<div className={styles.suggestionBox}>
				<div className={styles.leftCol}>
					<Image src={src} className={styles.img} />
				</div>
				<div className={styles.rightCol}>
					<Title size={titleSize} className={styles.title}>
						{title}
					</Title>
					<Button
						className={styles.buyButton}
						size='sm'
						color='red'
						onClick={onClick}
					>
						COMPRAR
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Suggestion;
