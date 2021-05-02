import { useContext } from "react";

import { ComicContext } from 'context/ComicContext';
import Navbar from "components/molecules/Navbar/index";
import Suggestions from "components/organisms/Suggestions/index";
import ComicCategory from "components/molecules/ComicCategory/index";
import Loader from 'components/atoms/Loader';
import Container from 'components/atoms/Container';

export default function Home() {
	const { loading, filteredComics, recommendations, filterByText } = useContext(ComicContext);

	return (
		<>
			<Navbar />
			{
				loading ? <Loader /> :
				<Container>
					<Suggestions list={recommendations}/>
					<ComicCategory title="Comics" comics={filteredComics}/>
				</Container>
			}
		</>
	);
}
