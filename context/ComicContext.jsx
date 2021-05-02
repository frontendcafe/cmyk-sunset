import { createContext, useState, useEffect } from 'react';
import { getRandomInt } from 'util/getRandomInt';

export const ComicContext = createContext('');

export const ComicProvider = ({ children }) => {
	const [comics, setComics] = useState([]);
	const [filteredComics, setFilteredComics] = useState([]);
	const [loading, setLoading] = useState(true);
	const [recommendations, setRecommendations] = useState([]);

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
				const comics = data
				.filter(comic => !!comic.images.length)
				.map(comic => ({
					...comic,
					imageUrl: `${comic.images[0].path}.${comic.images[0].extension}`,
					// Leave that comment to use in case that comic API limit us
					// This would be a mockup image
					// imageUrl: 'https://www.definicionabc.com/wp-content/uploads/Comic.jpg',
					viewDetail: () => window.location.href = `/comic/${comic.id}`
				}));

				setComics(comics);
				setFilteredComics(comics);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		if(comics) setRecommendations([
			getRecommendation(),
			getRecommendation(),
			getRecommendation()
		])
	}, [comics])

	return (
		<ComicContext.Provider
			value={{
        loading,
        filteredComics,
        recommendations,
        filterByText
      }}>
			{children}
		</ComicContext.Provider>
	);
};
