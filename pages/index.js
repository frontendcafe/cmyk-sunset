import { useContext } from "react";

import { ComicContext } from 'context/ComicContext';
import Navbar from "components/molecules/Navbar/index";
import Suggestions from "components/organisms/Suggestions/index";
import ComicCategory from "components/molecules/ComicCategory/index";

import Container from 'components/atoms/Container';

export default function Home() {
	const { loading, filteredComics, recommendations, filterByText } = useContext(ComicContext);

	const handleSearch = (event) => filterByText(event.target.value);

	return (
		<>
			<Navbar onChange={handleSearch} />
			<Container loading={loading}>
				<Suggestions list={recommendations} />
				<ComicCategory title="Comics" comics={filteredComics} />
			</Container>
		</>
	);
}
