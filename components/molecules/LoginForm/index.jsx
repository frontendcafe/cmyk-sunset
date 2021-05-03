import { useState, useContext } from 'react';

import styles from './styles.module.scss';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import { DataContext } from 'context/DataContext';

const LoginForm = () => {
	const [data, setData] = useState({});
	const { logIn } = useContext(DataContext);

	const handleInputChange = event =>
		setData(data => ({ ...data, [event.target.name]: event.target.value }));

	const handleSubmit = event => {
		event.preventDefault();

		const user = { ...data, name: data.email.split('@')[0] };
		logIn(user);
		window.location.href = '/';
	};

	return (
		<form className={styles.loginForm} onSubmit={handleSubmit}>
			<div className={styles.inputsForm}>
				<label htmlFor='email'>Email</label>
				<br />
				<Input
					name='email'
					placeholder='Email'
					size='sm'
					type='email'
					className={styles.loginInput}
					required
					onChange={handleInputChange}
				/>
				<label htmlFor='password'>Contraseña</label>
				<br />
				<Input
					name='password'
					placeholder='Contraseña'
					size='sm'
					type='password'
					className={styles.loginInput}
					required
					onChange={handleInputChange}
				/>
			</div>
			<Button
				className={styles.loginButton}
				size='md'
				color='red'
				children='INGRESAR'
				type='submit'
			/>
		</form>
	);
};

export default LoginForm;
