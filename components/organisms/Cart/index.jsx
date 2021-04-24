import Button from 'components/atoms/Button/index'
import Paragraph from 'components/atoms/Paragraph/index'
import ItemCart from 'components/molecules/ItemCart/index'

//mismo fondo y organizar los items en el centro de la pantalla

const Cart = ({}) =>{
    return(
        <div>
            <ItemCart></ItemCart>
            <Paragraph content='Total: '></Paragraph>
            <Button size="md">Comprar</Button>
        </div>
    );
}

export default Cart;