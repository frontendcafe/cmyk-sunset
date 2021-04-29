import { createContext, useState, useEffect } from 'react';
import { getRandomInt } from 'util/getRandomInt';

export const ComicContext = createContext('');

export const ComicProvider = ({ children }) => {
	const [comics, setComics] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredComics, setFilteredComics] = useState([]);

	const getRecommendation = () => {
		const recommendation = comics[getRandomInt(0, (comics.length - 1))];
		return recommendation;
	}

	const filterByText = (text) => {
		setFilteredComics(
			comics.filter(comic => comic.title.toLowerCase().includes(text.toLowerCase()))
		);
	}

	useEffect(() => {
		fetch('/api/comic')
			.then(response => response.json())
			.then(data => {
				setComics(data);
				setFilteredComics(data);
				setLoading(false);
			});
	}, []);

	return (
		<ComicContext.Provider
			value={{
        loading,
        filteredComics,
        getRecommendation,
        filterByText
      }}>
			{children}
		</ComicContext.Provider>
	);
};