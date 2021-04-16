import ImageNext from 'next/image';

const Image = ({ src, alt = 'random-image' }) => {
	return <ImageNext src={src} alt={alt} width={280} height={360} />;
};

export default Image;
