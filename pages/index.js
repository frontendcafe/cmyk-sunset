import { useEffect, useState } from "react";

export default function Home() {
	const [comics, setComics] = useState([]);

	useEffect(() => {
		fetch('/api/comic')
		.then(response => response.json())
		.then(data => setComics(data));
	});

	return (
		<ul>
			{comics.map((comic, index) => (
				<li key={index}>{comic.title}</li>
			))}
		</ul>
	);
}
