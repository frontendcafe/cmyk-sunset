import styles from './styles.module.scss';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';

const LoginForm = ({}) => {
	return (
			<form action='/' className={styles.loginForm}>
				<div className={styles.inputsForm}>
					<label htmlFor='email'>Email</label>
					<br />
					<Input
						id='email'
						placeholder='Email'
						size='sm'
						type='text'
						className={styles.loginInput}
					/>
					<label htmlFor='password'>Contraseña</label>
					<br />
					<Input
						id='password'
						placeholder='Contraseña'
						size='sm'
						type='text'
						className={styles.loginInput}
					/>
				</div>
				<Button
					className={styles.loginButton}
					size='md'
					color='red'
					children='INGRESAR'
				/>
			</form>
	);
};

export default LoginForm;
