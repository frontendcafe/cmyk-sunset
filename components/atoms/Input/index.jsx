import s from './styles.module.scss';

const Input = ({
	size = 'lg',
	isDisabled = false,
	type = 'text',
	placeholder,
	onChange,
}) => {

	return (
		<input
			className={`${s.customInput} ${s[size]}`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			disabled={isDisabled}
		/>
	);
};

export default Input;