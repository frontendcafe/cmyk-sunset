import styles from './styles.module.scss';

const Price = ({ size = 'lg', price = '500', currency='$' }) => {
	return <p className={`${styles.customPrice} ${styles[size]}`}>{`${currency}${price}`}</p>;
};

export default Price;
