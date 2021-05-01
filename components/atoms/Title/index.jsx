import styles from './styles.module.scss';

const Title = ({ size = 'md', children = '', className, hasBg = false }) => {
	const bg = hasBg ? styles.hasBg : '';
	return (
		<h1 className={`${styles.defaultTitle} ${styles[size]} ${className} ${bg}`}>
			{children}
		</h1>
	);
};

export default Title;
