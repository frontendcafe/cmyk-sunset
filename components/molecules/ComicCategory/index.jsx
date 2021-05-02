import Image from 'components/atoms/Image/index';
import Title from 'components/atoms/Title/index';
import styles from './styles.module.scss';
import React from 'react';

const ComicCategory = ({
	title = 'title',
	comics,
	size = 'md'
}) => {
	return (
		<div>
			<Title size={size} className={styles.title}>
				{title}
			</Title>
			<div className={styles.wrapper}>
				{comics.map((comic, key) => {
					return (
						<div
							key={key + 'i'}
							className={styles.img}
							onClick={() => comic.viewDetail()}>
							<Image key={key} src={comic.imageUrl} alt={comic.alt} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ComicCategory;
