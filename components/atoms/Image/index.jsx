import ImageNext from 'next/image';

const Image = ({ src, alt = 'random-image', className }) => {
	return (
		<div className={className}>
			<ImageNext src={src} alt={alt} width={280} height={360}/>
		</div>
	);
};

export default Image;
