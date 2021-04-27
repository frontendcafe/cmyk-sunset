import styles from './styles.module.scss';

const Paragraph = ({ size = 'md', content = '', className }) => {
	return (
		<p className={`${styles.defaultParagraph} ${styles[size]} ${className}`}>{content}</p>
	);
};

export default Paragraph;