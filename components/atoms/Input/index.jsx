import styles from './styles.module.scss';

const Input = ({
	size = 'lg',
	isDisabled = false,
	type = 'text',
	placeholder,
	onChange,
	dark = false,
	required,
	minLength,
	maxLength,
	pattern,
	className,
	value,
	...rest
}) => {
	const cn = dark ? styles.dark : '';
	return (
		<input
			className={`${styles.customInput} ${styles[size]} ${cn} ${className}`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			disabled={isDisabled}
			required={required}
			minLength={minLength}
			maxLength={maxLength}
			pattern={pattern}
			value={value}
			{...rest}
		/>
	);
};

export default Input;
