import s from './styles.module.scss';

const Title = ({ size = 'lg', text }) => {
	return (
		<>
			<h1 className={`${s.title} ${s[size]}`}>{text}</h1>
		</>
	);
};

export default Title;
