import Dev from '../../components/molecules/Dev';

export default function Login() {
	const developer = {
		name: 'Agustin',
		lastname: 'Vazquez',
		nick: '9gustin',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex consequatur ad. Incidunt nulla voluptatum, nemo veniam nobis nihil aspernatur provident architecto eaque ab doloremque laborum aliquid harum, suscipit commodi.(Descripcion)',
		linkedin: 'https://www.linkedin.com/in/vazquezagustin/',
		github: 'https://github.com/9gustin',
		twitter: null,
		image: 'https://avatars.githubusercontent.com/u/38046239?v=4',
		discord: '9gustin#7613',
		tags: [
			{
				code: 'React',
			},
			{
				code: 'Typescript',
			},
			{
				code: 'JS',
			},
		],
	};
	return <Dev developer={developer} />;
}
