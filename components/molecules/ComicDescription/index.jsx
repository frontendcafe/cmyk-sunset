import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';

const ComicDescription = ({
	defaultSize = 'sm',
	title = 'Información del comic',
	content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet, leo ut hendrerit consectetur, elit elit posuere orci, ac feugiat libero nisi eu eros. Quisque scelerisque tortor orci, id dapibus ligula ultrices a. Aenean rhoncus risus nec sapien placerat, id rhoncus magna suscipit.',
	pages = '152',
	creators = ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
}) => {
	return (
		<div className={styles.description}>
			<Title content={title} size={defaultSize} className={styles.title} />
			<Paragraph
				content={content}
				size={defaultSize}
				className={styles.content}
			/>
			<Paragraph
				content={`${pages} Páginas`}
				size={defaultSize}
				className={styles.pages}
			/>
			<ul>
				<h4>Creadores</h4>
				{creators.map((creator, index) => {
					return (
						<li key={index}>
							<Paragraph
								content={creator}
								size={defaultSize}
								className={styles.creator}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ComicDescription;
