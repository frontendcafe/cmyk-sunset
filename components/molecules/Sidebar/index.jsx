import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/Subtitle';
import Link from 'next/link';

const Sidebar = ({ isLoggedIn, menuCollapse }) => {
	const active = menuCollapse ? styles.active : '';

	let login = null;
	if (isLoggedIn) {
		login = (
			<li>
				<Link href='/sign-out'>
					<a>
						<Subtitle
							size={'lg'}
							children={'Sign Out'}
							className={styles.subtitle}
						/>
					</a>
				</Link>
			</li>
		);
	} else {
		login = (
			<>
				<li>
					<Link href='/sign-up'>
						<a>
							<Subtitle
								size={'lg'}
								children={'Sign Up'}
								className={styles.subtitle}
							/>
						</a>
					</Link>
				</li>
				<li>
					<Link href='/login'>
						<a>
							<Subtitle
								size={'lg'}
								children={'Login'}
								className={styles.subtitle}
							/>
						</a>
					</Link>
				</li>
			</>
		);
	}

	return (
		<div className={`${styles.sidebar} ${active}`}>
			<div className={styles.items}>
				<Title size={'lg'} children='Name' hasBg />
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
