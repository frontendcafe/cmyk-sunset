import Button from 'components/atoms/Button/index'
import Paragraph from 'components/atoms/Paragraph/index'
import Price from 'components/atoms/Price/index'
import ItemCart from 'components/molecules/ItemCart/index'
import React, { useState } from 'react'
import styles from './styles.module.scss';

//mismo fondo y organizar los items en el centro de la pantalla

const Cart = () => {

    const [counter, setCounter] = useState("")

    return (
        <div className={`${styles.container}`}>
            <ItemCart />
            <div className={`${styles.buyItems}`}>
                <div className={`${styles.price}`}>
                    <Paragraph content='Total: ' />
                    <Price
                        size='lg'
                        price='500'
                        currency='$'
                    />
                </div>
                <Button size="md" color={"green"}>Comprar</Button>
            </div>
        </div >
    );
}

export default Cart;