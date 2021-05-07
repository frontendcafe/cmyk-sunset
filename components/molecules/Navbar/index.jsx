import { useContext, useState } from 'react';
import { BsX } from 'react-icons/bs';
import Link from 'next/link';

import Title from 'components/atoms/Title';
import Icon from 'components/atoms/Icon';
import Input from 'components/atoms/Input';
import Subtitle from 'components/atoms/Subtitle';
import LeftIcon from 'components/atoms/LeftIcon';
import Sidebar from 'components/molecules/Sidebar';
import { DataContext } from 'context/DataContext';
import { ShoppingContext } from 'context/ShoppingContext';

import styles from './styles.module.scss';

const Navbar = ({ onChange, hasSearch }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { isStateLogged: isLogged, logOut } = useContext(DataContext);
	const { itemsCount } = useContext(ShoppingContext);

	const toggleMenuCollapse = () => {
		sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
	};

	let login = null;
	if (isLogged()) {
		login = (
			<li className={styles.button}>
				<Subtitle onClick={logOut}>Sign Out</Subtitle>
			</li>
		);
	} else {
		login = (
			<li className={styles.button}>
				<Link href='/login'>
					<a>
						<Subtitle children={'Login'} />
					</a>
				</Link>
			</li>
		);
	}

	const isActive = sidebarOpen ? styles.active : '';

	return (
		<>
			<div className={styles.navbar}>
				<Sidebar menuCollapse={sidebarOpen} />
				<LeftIcon
					dark
					className={styles.leftIcon}
					onClick={toggleMenuCollapse}
				/>
				<BsX
					className={`${styles.cross} ${isActive}`}
					onClick={toggleMenuCollapse}
				/>
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
					<Link href='/checkout'>
						<a>
							<Icon dark quantity={itemsCount()} className={styles.icon} hasCounter/>
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
