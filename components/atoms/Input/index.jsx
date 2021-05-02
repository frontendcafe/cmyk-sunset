import styles from './styles.module.scss';

const Input = ({
	size = 'lg',
	isDisabled = false,
	type = 'text',
	placeholder,
	onChange,
	dark = false,
	className,
}) => {
	const cn = dark ? styles.dark : '';
	return (
		<input
			className={`${styles.customInput} ${styles[size]} ${cn} ${className}`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			disabled={isDisabled}
		/>
	);
};

export default Input;
