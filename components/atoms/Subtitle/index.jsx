import styles from './styles.module.scss';

const Subtitle = ({ size, children }) => {
	return <p className={`${styles.customSubtitle} ${styles[size]}`}>{children}</p>;
};

export default Subtitle;
