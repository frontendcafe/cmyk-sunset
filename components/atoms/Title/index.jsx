import styles from './styles.module.scss';

const Title = ({ size = 'md', content = '', className }) => {
	return (
		<h1 className={`${styles.defaultTitle} ${styles[size]} ${className}`}>{content}</h1>
	);
};

export default Title;