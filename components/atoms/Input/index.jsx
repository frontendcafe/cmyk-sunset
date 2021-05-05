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
<<<<<<< HEAD
	value,
=======
	...rest
>>>>>>> 338cea76ef6cefd63949ce299bd391f6c408b4cf
}) => {
	const cn = dark ? styles.dark : '';
	return (
		<input
			className={`${styles.customInput} ${styles[size]} ${cn} ${className}`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			disabled={isDisabled}
<<<<<<< HEAD
			required={required}
			minLength={minLength}
			maxLength={maxLength}
			pattern={pattern}
			value={value}
=======
			{...rest}
>>>>>>> 338cea76ef6cefd63949ce299bd391f6c408b4cf
		/>
	);
};

export default Input;
