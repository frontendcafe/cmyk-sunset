import styles from './styles.module.scss';

const Subtitle = ({ size, children, className }) => {
	return (
		<p className={`${styles.customSubtitle} ${styles[size]} ${className}`}>{children}</p>
	);
};

export default Subtitle;
