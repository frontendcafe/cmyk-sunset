import ComicCategory from 'components/molecules/ComicCategory/index';

export default function Home() {
	const data = [
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
		{ src: '/capitanamerica.jpg', alt: 'Capitan amercia' },
	];

	const handlerClick = comic => {
		console.log(comic);
	};

	return (
		<ComicCategory title='Avengers' comics={data} onClick={handlerClick} />
	);
}
