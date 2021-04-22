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

/* 

import styles from './styles.module.scss';

const ComicInfo = ({
  title = 'X-Men Legends #2',
	currency = '$',
	price = '500',
	src = '',
	size = 'mobile',
	numPages = '100',
	characters = '',
	creator = '',
	history = '',
	rating = '9.0',
}) => {
	return (
    <div className={`${styles.mainComp}`}>
      <div className={`${styles.info} ${styles[size]}`}>
			<div className={styles.left}>
				<h1>{title}</h1>
				<p className={styles.price}>{`${currency}${price}`}</p>
			</div>
			<img src={src} alt={title}/>
      <div className={styles.right}><div className={styles.img}></div></div>
		</div>

    <div className={`${styles.description} ${styles[size]}`}>
			<p>Páginas: {numPages}</p>
			<p>Personajes: {characters}</p>
			<p>Creador: {creator}</p>
			<p>Historia: {history}</p>
			<p>Puntuación: {rating}</p>
		</div>
    </div>
	);
};

export default ComicInfo;
 */