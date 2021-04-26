import styles from './styles.module.scss';

const Paragraph = ({ size = 'md', content = '', className }) => {
	return (
		<span className={`${styles.defaultParagraph} ${styles[size]} ${className}`}>{content}</span>
	);
};

export default Paragraph;