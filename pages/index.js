import { useContext } from "react";
import { ComicContext } from 'context/ComicContext';

export default function Home() {
	const { loading, filteredComics, getRecommendation, filterByText } = useContext(ComicContext);

	return (loading ? 'cargando...' :
		<>
			<p>tu recomendacion es: {getRecommendation().title}</p>
			<input onChange={(event) => filterByText(event.target.value)} />
			<ul>
				{filteredComics.map((comic, index) => (
					<li key={index}>{comic.title}</li>
				))}
			</ul>
		</>
	);
}
