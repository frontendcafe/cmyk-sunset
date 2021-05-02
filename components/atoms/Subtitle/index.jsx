import styles from './styles.module.scss';

const Subtitle = ({ size, children, className, hasBg }) => {
	const cn = `${styles.customSubtitle} ${styles[size]} ${hasBg && styles.hasBg} ${className}`;

	return (
		<p className={cn}>{children}</p>
	);
};

export default Subtitle;
