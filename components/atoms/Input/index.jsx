import s from './styles.module.scss';

const Input = ({
	size = 'lg',
	isDisabled = false,
	type = 'text',
	placeholder,
	onChange,
	dark = false,
}) => {
	const cn = dark ? styles.dark : '';
	return (
		<input
			className={`${s.customInput} ${s[size]} ${cn}`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			disabled={isDisabled}
		/>
	);
};

export default Input;