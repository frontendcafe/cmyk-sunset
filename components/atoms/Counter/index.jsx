import styles from './styles.module.scss';

const Counter = ({ quantity = 0 }) => {
	return <p className={styles.counter}>{quantity}</p>
};

export default Counter;
