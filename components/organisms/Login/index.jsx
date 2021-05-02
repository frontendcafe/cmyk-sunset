import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/Subtitle';
import LoginForm from 'components/molecules/LoginForm';
// import AuthGoogleProvider from 'components/atoms/AuthGoogleProvider'

const Login = ({ defaultSize = 'md' }) => {
	return (
		<div className={styles.login}>
			<header className={styles.headerLogin}>
				<Title
					content='Bienvenidx a'
					size={defaultSize}
					className={styles.title}
				/>
				<Title
					content='Marvel Store'
					size={defaultSize}
					className={styles.titleRed}
				/>
			</header>
			<LoginForm />
			<div className={styles.googleAuth}>{/* <AuthGoogleProvider /> */}
        <Subtitle children='Ingresa con'
					size={defaultSize}
					className={styles.subtitle}/>
      </div>
		</div>
	);
};

export default Login;

/*
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
*/
