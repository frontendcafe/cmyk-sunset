import { useContext } from 'react';

import Button from 'components/atoms/Button/index';
import Paragraph from 'components/atoms/Paragraph/index';
import Price from 'components/atoms/Price/index';
import Subtitle from 'components/atoms/Subtitle/index';
import ItemCart from 'components/molecules/ItemCart/index';
import { ShoppingContext } from 'context/ShoppingContext';

import styles from './styles.module.scss';

const Cart = () => {
	const { orderData, itemsCount } = useContext(ShoppingContext);

	const handleContinue = () => window.location.href = '/payment';

	return (
		<div className={`${styles.container}`}>
			<Subtitle size='lg' hasBg>
				Carrito
			</Subtitle>
			{!!itemsCount() ? (
				<div className={`${styles.box}`}>
					{orderData.items.map(
						({ idMarvel, imageUrl, title, quantity, total, price }) => (
							<ItemCart
								idMarvel={idMarvel}
								imageUrl={imageUrl}
								title={title}
								quantity={quantity}
								total={total}
								price={price}
								key={idMarvel}
							/>
						)
					)}
					<div className={`${styles.buyItems}`}>
						<div className={`${styles.price}`}>
							<Paragraph
								size='sm'
								content='Total'
								className={`${styles.paragraph}`}
							/>
							<Price size='lg' price={orderData.totalAmount} currency='$' />
						</div>
						<Button size='md' color={'green'} onClick={handleContinue}>
							CONTINUAR COMPRA
						</Button>
					</div>
				</div>
			) : (
				'No tienes items en tu carrito.'
			)}
		</div>
	);
};

export default Cart;
