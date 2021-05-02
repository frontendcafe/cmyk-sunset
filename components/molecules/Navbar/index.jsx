import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Icon from 'components/atoms/Icon';
import Input from 'components/atoms/Input';
import Subtitle from 'components/atoms/Subtitle';
import LeftIcon from 'components/atoms/LeftIcon/index';
import Link from 'next/link';

const Navbar = ({
	isLoggedIn = false,
	purchaseQuantity = 0,
	onChange,
	hasSearch
}) => {
	let login = null;
	if (isLoggedIn) {
		login = (
			<li className={styles.button}>
				<Link href='/sign-out'>
					<Subtitle children={'Sign Out'} />
				</Link>
			</li>
		);
	} else {
		login = (
			<>
				<li className={styles.button}>
					<Link href='/sign-up'>
						<a>
							<Subtitle children={'Sign Up'} />
						</a>
					</Link>
				</li>
				<li className={styles.button}>
					<Link href='/login'>
						<a>
							<Subtitle children={'Login'} />
						</a>
					</Link>
				</li>
			</>
		);
	}

	return (
		<>
			<div className={styles.navbar}>
				<LeftIcon dark className={styles.leftIcon} />
				<Link href='/'>
					<a>
						<Title hasBg children={'Marvel Store'} className={styles.title} />
					</a>
				</Link>
				{hasSearch && (
					<Input
						dark
						placeholder={'Search'}
						className={styles.input}
						onChange={onChange}
					/>
				)}
				<div className={styles.right}>
					<ul className={styles.navmenu}>
						<li className={styles.button}>
							<Link href='/about-us'>
								<a>
									<Subtitle children={'About Us'} />
								</a>
							</Link>
						</li>
						{login}
					</ul>
					<Link href='/purchase'>
						<a>
							<Icon dark quantity={purchaseQuantity} className={styles.icon} />
						</a>
					</Link>
				</div>
			</div>
			{hasSearch && (
				<Input
					dark
					size='sm'
					placeholder={'Search'}
					className={styles.search}
					onChange={onChange}
				/>
			)}
		</>
	);
};

export default Navbar;
