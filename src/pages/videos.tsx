import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReturnButton from '@components/atoms/return-button/ReturnButton';
import Layout from '@components/template/layout';

import { VideoWrapper } from '../styles/videos.styles';

const videos = () => {
  const [url, setUrl] = useState(null as null | string);

  const router = useRouter();
  const {
    query: { v },
  } = router;

  useEffect(() => {
    if (v) setUrl(v as string);
  }, [v]);

  return (
    <Layout title="Sección de videos">
      {url && (
        <>
          <ReturnButton />
          <VideoWrapper>
            <iframe
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </>
      )}
    </Layout>
  );
};

export default videos;
