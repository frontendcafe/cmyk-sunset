import styles from './styles.module.scss';

const Price = ({ size = 'lg', price = '500', coin='$' }) => {
	return <p className={`${styles.customPrice} ${styles[size]}`}>{`${coin}${price}`}</p>;
};

export default Price;
