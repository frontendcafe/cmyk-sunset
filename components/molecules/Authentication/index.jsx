import AuthGoogleProvider from 'components/atoms/AuthProviders/google';
import styles from './styles.module.scss';

const Authentication = () => {
	return (
		<div className={styles.container}>
			<AuthGoogleProvider />
		</div>
	);
};

export default Authentication;
