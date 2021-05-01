import styles from './styles.module.scss';
import Subtitle from 'components/atoms/Subtitle';
import Suggestion from 'components/molecules/Suggestion';

const Suggestions = ({ list }) => {
	return (
		<div className={styles.suggestions}>
			<div className={styles.subtitleBox}>
				<Subtitle
					children='Una sugerencia para ti'
					size='sm'
					className={styles.subtitle}
				/>
			</div>

			<div className={styles.suggestionsBox}>
				<Suggestion className={styles.suggestion} />
			</div>
		</div>
	);
};

export default Suggestions;
