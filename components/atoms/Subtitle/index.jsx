import styles from './styles.module.scss';

const Subtitle = ({ size, children, className, hasBg, onClick }) => {
	const cn = `${styles.customSubtitle} ${styles[size]} ${hasBg && styles.hasBg} ${className}`;

	return (
		<p className={cn} onClick={onClick}>{children}</p>
	);
};

export default Subtitle;
