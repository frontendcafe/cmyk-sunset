import styles from './styles.module.scss';
import { CgShoppingBag } from 'react-icons/cg';
import Counter from 'components/atoms/Counter';

const Icon = ({ isDisabled = false, hasCounter = false, dark = false }) => {
	let cn = hasCounter ? styles.hasCounter : '';
	cn += dark ? styles.dark : '';
	const counter = hasCounter ? <Counter /> : null;
	return (
		<>
			<button disabled={isDisabled} className={`${styles.button} ${cn}`}>
				<CgShoppingBag className={styles.icon} />
				{counter}
			</button>
		</>
	);
};

export default Icon;
