import styles from './styles.module.scss';

const Paragraph = ({ size = 'md', content = '' }) => {
	return (
		<p className={`${styles.defaultParagraph} ${styles[size]}`}>{content}</p>
	);
};

export default Paragraph;