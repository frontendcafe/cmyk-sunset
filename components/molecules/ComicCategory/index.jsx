import Image from 'components/atoms/Image/index';
import Title from 'components/atoms/Title/index';
import styles from './styles.module.scss';
import React from 'react';

const ComicCategory = ({
	title = 'title',
	comics,
	size = 'md',
	className,
	onClick,
}) => {
	console.log('estamos');
	return (
		<div>
			<Title size={size} content={title} className={styles.title} />
			<div className={styles.wrapper}>
				{comics.map((comic, key) => {
					return (
						<div
							key={key + 'i'}
							className={styles.img}
							onClick={() => onClick(comic)}>
							<Image key={key} src={comic.src} alt={comic.alt} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ComicCategory;
