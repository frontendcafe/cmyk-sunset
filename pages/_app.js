import 'normalize.css';
import 'assets/styles/index.scss';
import { DataProvider } from '../context/DataContext';
import { ComicProvider } from 'context/ComicContext';

function MyApp({ Component, pageProps }) {
  return (
		<DataProvider>
			<ComicProvider>
				<Component {...pageProps} />
			</ComicProvider>
		</DataProvider>
	);
}

export default MyApp
