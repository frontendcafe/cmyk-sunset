import 'normalize.css';
import 'assets/styles/index.scss';
import { DataProvider } from '../context/DataContext';

function MyApp({ Component, pageProps }) {
  return (
		<DataProvider>
			<Component {...pageProps} />
		</DataProvider>
	);
}

export default MyApp
