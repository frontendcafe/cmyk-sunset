import styles from './styles.module.scss';
import {useContext} from 'react';
import {DataContext} from 'context/DataContext';
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/Subtitle';
import LoginForm from 'components/molecules/LoginForm';
import AuthGoogleProvider from 'components/atoms/AuthGoogleProvider';

const Login = ({ defaultSize = 'md' }) => {
  const { isLogged } = useContext(DataContext);
  if (isLogged()) window.location.href = '/';

	return (
		<div className={styles.login}>
			<header className={styles.headerLogin}>
				<Title
					children='Bienvenidx a'
					size={defaultSize}
					className={styles.title}
				/>
				<Title
					children='Marvel Store'
					size={defaultSize}
					className={styles.titleRed}
				/>
			</header>
			<body>
				<div className={styles.left}>
        <img src='/marvel.svg' alt='Portada Marvel' className={styles.marvelImg} />
					<img src='/portrait.svg' alt='Portada Heroes' className={styles.heroesImg}  />
        </div>
        <div className={styles.redLine}></div>

				<div className={styles.right}>
					<LoginForm className={styles.form} />
					<div className={styles.googleAuth}>
						<div className={styles.subtitleDiv}>
							<Subtitle
								children='Ingresa con'
								size={defaultSize}
								className={styles.subtitle}
							/>
              
						</div>
            <AuthGoogleProvider className={styles.googleLogin} />
					</div>
				</div>
			</body>
		</div>
	);
};

export default Login;
