import styles from './styles.module.scss';
import Title from 'components/atoms/Title';
import Icon from 'components/atoms/Icon';
import Input from 'components/atoms/Input';
import Subtitle from 'components/atoms/Subtitle';
import LeftIcon from 'components/atoms/LeftIcon/index';

const Navbar = ({}) => {
	return (
		<div>
			<div className={styles.navbar}>
				<LeftIcon dark={true} />
				<Title dark={true} content={'Marvel Store'} />
				{/* <Input dark={true} placeholder={'Search'} />
				<Subtitle dark={true} children={'About Us'} />
				<Subtitle dark={true} children={'Inicia Sesión'} /> */}
				<Icon dark={true} hasCounter={true} quantity={3} />
			</div>
		</div>
	);
};

export default Navbar;
