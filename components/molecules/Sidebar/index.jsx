import Link from 'next/link';
import { useContext } from 'react';

import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/Subtitle';
import { DataContext } from 'context/DataContext';

const Sidebar = ({ menuCollapse }) => {
	const active = menuCollapse ? styles.active : '';
	const { isLogged, data, logOut } = useContext(DataContext);

	let login = null;
	if (isLogged()) {
		login = (
			<li>
				<Subtitle
					size={'lg'}
					className={styles.subtitle}
					onClick={logOut}
				>
					Sign Out
				</Subtitle>
			</li>
		);
	} else {
		login = (
			<li>
				<Link href='/login'>
					<a>
						<Subtitle size={'lg'} className={styles.subtitle}>
							Login
						</Subtitle>
					</a>
				</Link>
			</li>
		);
	}

	return (
		<div className={`${styles.sidebar} ${active}`}>
			<div className={styles.items}>
				<Title size={'lg'} hasBg>
					{data?.name || "Marvel Store"}
				</Title>
				<ul>
					<li>
						<Link href='/'>
							<a>
								<Subtitle
									size={'lg'}
									children='Home'
									className={styles.subtitle}
								/>
							</a>
						</Link>
					</li>
					<li>
						<Link href='/about-us'>
							<a>
								<Subtitle
									size={'lg'}
									children='About Us'
									className={styles.subtitle}
								/>
							</a>
						</Link>
					</li>
					{login}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
