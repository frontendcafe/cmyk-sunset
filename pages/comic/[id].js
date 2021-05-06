import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

import { getRandomInt } from 'util/getRandomInt';
import ComicDetail from 'components/organisms/ComicDetail';
import Container from 'components/atoms/Container/index';

export default function Comic() {
  const { query: { id } } = useRouter();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/comic/${id}`)
        .then(response => response.json())
        .then(data => {
          data.imageUrl = `${data.images[0].path}.${data.images[0].extension}`;
          setComic(data);
          setLoading(false);
        })
    }
  }, [id]);

  return (
    <Container loading={loading}>
      <ComicDetail
        id={id}
        infoTitle={comic?.title}
        rating={`${getRandomInt(0, 10)}/10`}
        src={comic?.imageUrl}
        currency='$'
        price={comic?.prices?.[0].price || getRandomInt(200, 600)}
        content={comic?.description}
        pages={comic?.pageCount || getRandomInt(100, 200)}
        creators={comic?.creators?.items.map(({ name }) => name)}
      />
    </Container>
  );
}
