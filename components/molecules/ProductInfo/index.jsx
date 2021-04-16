import styles from './styles.module.scss';

const ProductInfo = ({
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

export default ProductInfo;
