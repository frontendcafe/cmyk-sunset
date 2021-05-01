import styles from './styles.module.scss';

const Counter = ({ quantity = 0 }) => {
	return <div className={styles.counter}>{quantity}</div>
};

export default Counter;
