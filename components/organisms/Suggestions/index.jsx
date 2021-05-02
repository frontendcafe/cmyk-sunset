import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Suggestion from 'components/molecules/Suggestion';

const Suggestions = ({ list }) => {
	return (
		<div className={styles.suggestions}>
			<div className={styles.titleBox}>
				<Title
					size='sm'
					className={styles.title}
				>
					Una sugerencia para ti
				</Title>
				<Title
					size='sm'
					className={styles.titlePlural}
				>
					Unas sugerencias para ti
				</Title>
			</div>

			<div className={styles.suggestionsBox}>
				{
					!!list?.length && list.map(({id, imageUrl, title, viewDetail}, index) => (
						<Suggestion 
							key={id}
							className={`${styles.suggestion} ${!!index && styles.hidden}`}
							title ={title}
							src ={imageUrl}
							onClick={viewDetail}
						/>
					))
				}
			</div>
		</div>
	);
};

export default Suggestions;
