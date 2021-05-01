import Button from 'components/atoms/Button/index'
import Paragraph from 'components/atoms/Paragraph/index'
import Price from 'components/atoms/Price/index'
import Title from 'components/atoms/Title/index';
import ItemCart from 'components/molecules/ItemCart/index'

import styles from './styles.module.scss';

const Cart = () => {
    return (
        <div className={`${styles.container}`}>
            <Title size="lg" className={`${styles.title}`} content="Carrito" />
            <div className={`${styles.box}`}>
                <ItemCart />
                <div className={`${styles.buyItems}`}>
                    <div className={`${styles.price}`}>
                        <Paragraph size="sm" content='Total: ' className={`${styles.paragraph}`} />
                        <Price
                            size='lg'
                            price='500'
                            currency='$'
                        />
                    </div>
                    <Button size="md" color={"green"}>Comprar</Button>
                </div>
            </div>
        </div >
    );
}

export default Cart;