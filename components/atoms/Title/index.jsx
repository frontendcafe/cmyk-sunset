import styles from './styles.module.scss';

const Title = ({ size = 'md', content = '' }) => {
	return (
		<h1 className={`${styles.defaultTitle} ${styles[size]}`}>{content}</h1>
	);
};

export default Title;