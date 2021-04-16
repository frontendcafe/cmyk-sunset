import styles from './styles.module.scss';

const ProductDescription = ({
	size = 'mobile',
	numPages = '100',
	characters = '',
	creator = '',
	history = '',
	rating = '9.0',
}) => {
	return (
		<div className={`${styles.description} ${styles[size]}`}>
			<p>Páginas: {numPages}</p>
			<p>Personajes: {characters}</p>
			<p>Creador: {creator}</p>
			<p>Historia: {history}</p>
			<p>Puntuación: {rating}</p>
		</div>
	);
};

export default ProductDescription;
