import { useContext } from "react";

import { ComicContext } from 'context/ComicContext';
import Suggestions from "components/organisms/Suggestions/index";
import ComicCategory from "components/molecules/ComicCategory/index";

import Container from 'components/atoms/Container';

export default function Home() {
	const { loading, filteredComics, recommendations } = useContext(ComicContext);

	return (
		<Container loading={loading} hasSearch>
			<Suggestions list={recommendations} />
			<ComicCategory title="Comics" comics={filteredComics} />
		</Container>
	);
}
