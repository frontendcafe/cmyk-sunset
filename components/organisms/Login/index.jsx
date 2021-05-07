import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { DataContext } from 'context/DataContext';
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/Subtitle';
import LoginForm from 'components/molecules/LoginForm';
import AuthGoogleProvider from 'components/atoms/AuthGoogleProvider';

import styles from './styles.module.scss';

const Login = ({ defaultSize = 'md' }) => {
	const router = useRouter();
	const { isLogged } = useContext(DataContext);

	useEffect(() => {
		if (isLogged()) router.push('/');
	}, []);

	const handleSuccess = () => {
		const path = router.query.redirectTo ?? '/';
		router.push(path);
	}

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
			<main>
				<div className={styles.left}>
					<img
						src='/marvel.svg'
						alt='Portada Marvel'
						className={styles.marvelImg}
					/>
					<img
						src='/portrait.svg'
						alt='Portada Heroes'
						className={styles.heroesImg}
					/>
				</div>
				<div className={styles.redLine}></div>

				<div className={styles.right}>
					<LoginForm className={styles.form} onSuccess={handleSuccess} />
					<div className={styles.googleAuth}>
						<div className={styles.subtitleDiv}>
							<Subtitle
								children='Ingresa con'
								size={defaultSize}
								className={styles.subtitle}
							/>
						</div>
						<AuthGoogleProvider className={styles.googleLogin} onSuccess={handleSuccess} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Login;
