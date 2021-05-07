import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Container from 'components/atoms/Container/index';
import CartForm from 'components/molecules/CartForm/index';
import { DataContext } from 'context/DataContext';
import { ShoppingContext } from 'context/ShoppingContext';

export default function Payment() {
  const router = useRouter();
  const { isLogged } = useContext(DataContext);
  const { orderData, itemsCount } = useContext(ShoppingContext);

  useEffect(() => {
    if (!isLogged()) router.push({
      pathname: '/login',
      query: { redirectTo: 'payment' },
    });
  }, []);

  const handleOnSubmit = (data) => {
    console.log(data);
  }

  return (
    <Container>
      {
        !!itemsCount() ? (<CartForm price={orderData?.totalAmount} onSubmitForm={handleOnSubmit} />) : 'No tienes items en tu carrito.'
      }
    </Container>
  );
}
