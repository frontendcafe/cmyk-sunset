import s from './styles.module.scss';

function selectClassName({ size }) {
	let cn;

	// Check the size passed into the props and assign a class
	if (size === 'lg') {
		cn = 'lg';
	} else if (size === 'md') {
		cn = 'md';
	} else if (size === 'sm') {
		cn = 'sm';
	}

	return cn;
}

const Input = ({
	size = 'lg',
	isDisabled = false,
	type = 'text',
	placeholder,
	onChange,
}) => {
	const cn = selectClassName({ size });

	return (
		<input
			className={`${s.customInput} ${s[cn]}`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			disabled={isDisabled}
		/>
	);
};

export default Input;
