import { useEffect, useState } from 'react';

import Container from 'components/atoms/Container/index';
import AppInfo from 'components/molecules/AppInfo';
import Devs from 'components/organisms/Devs';

export default function AboutUs() {
  const [loading, setLoading] = useState(true);
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    fetch('/api/devs')
    .then(response => response.json())
    .then(jsonResponse => {
      setDevs(jsonResponse.data);
      setLoading(false);
    })
  }, []);

  return (
    <Container hasNavbar={false} loading={loading}>
      <AppInfo />
      <Devs devs={devs}/>
    </Container>
  );
}
