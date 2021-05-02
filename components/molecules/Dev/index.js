import Paragraph from 'components/atoms/Paragraph/index';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import Image from 'next/image';

import styles, { socialIconColor, socialIconHeight } from './styles.module.scss';

const Dev = ({ developer }) => {
	return (
		<>
			<div className={`${styles.container}`}>
				{
					developer.image && (
						<Image
							className={styles.image}
							src={developer.image}
							alt={developer.name + developer.lastname}
							width={100}
							height={100}
						/>
					)}
				<div>
					<h1 className={styles.title}>
						<span>{developer.nick}</span>
					</h1>
					<ul className={styles.code}>
						{developer.tags.map((tag, key) => (
							<li key={key}>{tag.code}</li>
						))}{' '}
					</ul>
				</div>
				<Paragraph content={developer.description} />

				<div className={styles.social}>
					{developer.linkedin && (
						<a href={developer.linkedin}>
							<FaLinkedin color={socialIconColor} size={socialIconHeight} />
						</a>
					)}
					{developer.twitter && (
						<a href={developer.twitter}>
							<FaTwitterSquare color={socialIconColor} size={socialIconHeight} />
						</a>
					)}
					{developer.github && (
						<a href={developer.github}>
							<FaGithubSquare color={socialIconColor} size={socialIconHeight} />
						</a>
					)}
				</div>
			</div>
		</>
	);
};

export default Dev;
