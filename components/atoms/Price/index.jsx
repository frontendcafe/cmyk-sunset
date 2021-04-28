import styles from './styles.module.scss';

const Price = ({ size = 'lg', price = '500', currency='$', className }) => {
	return <span className={`${styles.customPrice} ${styles[size]} ${className}`}>{`${currency}${price}`}</span>;
};

export default Price;
