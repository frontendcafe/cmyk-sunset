import s from './styles.module.scss';

const Subtitle = ({ size, children }) => {
	return <p className={`${s.customSubtitle} ${s[size]}`}>{children}</p>;
};

export default Subtitle;
