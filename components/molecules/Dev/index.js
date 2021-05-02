import Image from 'next/image';

const Dev = ({ developer }) => {
	return (
		<div>
			<div>
				<Image
					src={developer.image}
					alt={developer.name + developer.lastname}
					width={500}
					height={500}
				/>
				
			</div>
			<div>{developer.nick}</div>
			<div>{developer.description}</div>
			<div>{developer.tags} hacer el array </div>
			<div>
				<div>{developer.linkedin}</div>
				<div>{developer.twitter}</div>
				<div>{developer.github}</div>
			</div>
		</div>
	);
};

export default index;
