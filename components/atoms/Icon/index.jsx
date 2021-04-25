import styles from './styles.module.scss';
import { CgShoppingBag } from 'react-icons/cg';
import Counter from 'components/atoms/Counter';

const Icon = ({
	isDisabled = false,
	hasCounter = false,
	dark = false,
	quantity = 0,
	onClick,
}) => {
	let cn = hasCounter ? styles.hasCounter : '';
	cn += dark ? styles.dark : '';
	const counter = hasCounter ? <Counter quantity={quantity} /> : null;
	return (
		<button
			disabled={isDisabled}
			className={`${styles.button} ${cn}`}
			onClick={onClick}>
			<CgShoppingBag className={styles.icon} />
			{counter}
		</button>
	);
};

export default Icon;
