import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Suggestion from 'components/molecules/Suggestion';

const Suggestions = ({ list }) => {
	return (
		<div className={styles.suggestions}>
			<div className={styles.titleBox}>
				<Title
					content='Una sugerencia para ti'
					size='sm'
					className={styles.title}
				/>
				<Title
					content='Unas sugerencias para ti'
					size='sm'
					className={styles.titlePlural}
				/>
			</div>

			<div className={styles.suggestionsBox}>
				{
					!!list?.length && list.map((comic, index) => (
						<Suggestion 
							key={comic.id}
							className={`${styles.suggestion} ${index === 0 && styles.hidden}`}
							title = 'X-Men Legends #2'
							src = ''
							onClick=""
						/>
					))
				}
			</div>
		</div>
	);
};

export default Suggestions;
