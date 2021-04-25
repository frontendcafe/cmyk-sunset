import Image from 'next/image';
import firebaseConfig from 'util/firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import styles from './styles.module.scss';

const AuthGoogleProvider = () => {
	const singin = () => {
		try {
			firebase.initializeApp(firebaseConfig);
		} catch (e) {}

		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				var credential = result.credential;

				var token = credential.accessToken;
				var user = result.user;
				console.log({ credential, token, user });
			})
			.catch(error => {
				var errorCode = error.code;
				console.log({ errorCode });
			});
	};

	return (
		<button
			className={`${styles.authProvider} ${styles.google}`}
			onClick={singin}>
			<Image src='/google.svg' width={100} height={100} />
		</button>
	);
};

export default AuthGoogleProvider;
