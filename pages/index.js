import ComicCategory from 'components/molecules/ComicCategory/index';

export default function Home() {
	const comics = [
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan America' },
	];

	return <ComicCategory title='Avengers' comics={comics}></ComicCategory>;
}
