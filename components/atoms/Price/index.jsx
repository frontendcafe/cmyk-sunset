import styles from './styles.module.scss';

const Price = ({ size = 'lg', price = '$500' }) => {
	return <p className={`${styles.customPrice} ${styles[size]}`}>{price}</p>;
};

export default Price;
