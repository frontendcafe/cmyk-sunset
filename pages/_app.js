import 'normalize.css';
import 'assets/styles/index.scss';
import { DataProvider } from '../context/DataContext';
import { ComicProvider } from 'context/ComicContext';
import { ShoppingProvider } from 'context/ShoppingContext';

function MyApp({ Component, pageProps }) {
  return (
		<DataProvider>
			<ComicProvider>
				<ShoppingProvider>
					<Component {...pageProps} />
				</ShoppingProvider>
			</ComicProvider>
		</DataProvider>
	);
}

export default MyApp
