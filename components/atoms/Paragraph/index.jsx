import styles from './styles.module.scss';

const Paragraph = ({ size = 'lg', content = 'default-content' }) => {
	return (
		<p className={`${styles.defaultParagraph} ${styles[size]}`}>{content}</p>
	);
};

export default Paragraph;