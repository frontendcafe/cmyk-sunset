import { useContext } from "react";

import { ComicContext } from 'context/ComicContext';
import Navbar from "components/molecules/Navbar/index";
import Suggestions from "components/organisms/Suggestions/index";
import ComicCategory from "components/molecules/ComicCategory/index";
import Loader from 'components/atoms/Loader';

export default function Home() {
	const { loading, filteredComics, getRecommendation, filterByText } = useContext(ComicContext);

	console.log(filteredComics);

	return (
		<>
			<Navbar />
			{
				loading ? <Loader /> :
				<>
					<Suggestions />
					<ComicCategory title="Comics" comics={filteredComics}/>
				</>
			}
		</>
	);
}
