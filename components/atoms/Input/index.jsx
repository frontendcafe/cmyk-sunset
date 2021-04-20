import s from './styles.module.scss';

const Input = ({
	size = 'lg',
	isDisabled = false,
	type = 'text',
	placeholder,
	onChange,
	dark = false,
}) => {
	let cn = null;
	dark ? cn = 'dark' : cn = '';
	return (
		<input
			className={`${s.customInput} ${s[size]} ${s[cn]}`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			disabled={isDisabled}
		/>
	);
};

export default Input;
