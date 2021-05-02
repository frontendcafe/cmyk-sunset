import styles from './styles.module.scss';

const Paragraph = ({ size = 'md', content = '', className, children }) => {
	return (
		<p className={`${styles.defaultParagraph} ${styles[size]} ${className}`}>
			{children || content}
		</p>
	);
};

export default Paragraph;