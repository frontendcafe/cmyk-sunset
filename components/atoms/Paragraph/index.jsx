import styles from './styles.module.scss';

const Paragraph = ({ content = '' }) => {
	return <p className={`${styles.defaultParagraph}`}>{content}</p>;
};

export default Paragraph;
