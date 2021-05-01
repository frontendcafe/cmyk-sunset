import styles from './styles.module.scss';
import { CgShoppingBag } from 'react-icons/cg';
import Counter from 'components/atoms/Counter';

const Icon = ({
	isDisabled = false,
	dark = false,
	quantity = 0,
	onClick,
	className,
}) => {
	const hasCounter = !!quantity;
	const cn = hasCounter ? styles.hasCounter : '';
	const isDark = dark ? styles.dark : '';
	const counter = hasCounter ? <Counter quantity={quantity} /> : null;
	return (
		<button
			disabled={isDisabled}
			className={`${styles.button} ${cn} ${isDark} ${className}`}
			onClick={onClick}>
			<CgShoppingBag className={styles.icon} />
			{counter}
		</button>
	);
};

export default Icon;
