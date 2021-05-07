import { useContext } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import firebaseConfig from 'util/firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

import { DataContext } from 'context/DataContext';

import Button from '../Button';

import styles from './styles.module.scss';

const AuthGoogleProvider = ({onSuccess}) => {
	const { logIn } = useContext(DataContext);

	const singIn = () => {
		try {
			firebase.initializeApp(firebaseConfig);
		} catch (e) {}

		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const { photoURL: img, email, displayName: name } = result.user;
				logIn({ img, email, name });
				onSuccess();
			})
			.catch(error => {
				var errorCode = error.code;
				console.log({ errorCode });
			});
	};

	return (
		<Button
			className={`${styles.authProvider}`}
			onClick={singIn}
			size='md'>
			<AiOutlineGoogle className={styles.aiOutline} />
			Ingresa con google
		</Button>
	);
};

export default AuthGoogleProvider;
