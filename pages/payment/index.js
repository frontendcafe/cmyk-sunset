import {useContext, useEffect} from 'react';
import { useRouter } from 'next/router';

import Container from 'components/atoms/Container/index';
import CartForm from 'components/molecules/CartForm/index';
import {DataContext} from 'context/DataContext';

export default function Checkout() {
  const router = useRouter();
  const { isLogged } = useContext(DataContext);

  useEffect(() => {
    console.log(window.localStorate);
    if (!isLogged()) router.push({
      pathname: '/login',
      query: { redirectTo: 'payment' },
    });
  }, []);

  return (
    <Container>
      <CartForm />
    </Container>
  );
}
