import React from 'react';

import {
  BannerCtn,
  BannerImage,
  BannerTitleCtn,
  ContentCtn,
} from './styles';

const Banner = () => {
  return (
    <BannerCtn>
      <ContentCtn>
        <BannerTitleCtn>
          <h1>IDDI NUEVA GRANADA</h1>
          <h2>202 AÑOS DE NUESTRA INDEPENDENCIA</h2>
          <button>Departamento de Ciencias Sociales</button>
        </BannerTitleCtn>
        <BannerImage src="/static/logo-iddi.webp" />
      </ContentCtn>
    </BannerCtn>
  );
};

export default Banner;
