import React, { useContext } from 'react';

import withLoading from 'components/atoms/WithLoading';
import { ComicContext } from 'context/ComicContext';
import Navbar from "components/molecules/Navbar/index";

import styles from './styles.module.scss';

function Container({ children, hasSearch }) {
	const { filterByText } = useContext(ComicContext);

	const handleSearch = event => filterByText(event.target.value);

	return (
		<>
			<Navbar onChange={handleSearch} hasSearch={hasSearch}/>
			<div className={styles.container}>{children}</div>
		</>
	);
}

export default withLoading(Container);
