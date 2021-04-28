import styles from './styles.module.scss';
import { CgMenuLeftAlt } from 'react-icons/cg';

const LeftIcon = ({ dark = false, onClick, className }) => {
	const isDark = dark ? styles.dark : '';
	return (
		<button
			className={`${styles.sideButton} ${isDark} ${className}`}
			onClick={onClick}>
			<CgMenuLeftAlt className={styles.icon} />
		</button>
	);
};

export default LeftIcon;
