import React from 'react';

import {
  BannerCtn,
  BannerImage,
  BannerTitleCtn,
  BannerTitle,
  LogoIddi,
} from './styles';

const Banner = () => {
  return (
    <BannerCtn>
      <LogoIddi src="/static/logo-iddi.webp" />
      <BannerImage></BannerImage>
      <BannerTitleCtn>
        <BannerTitle>
          <h1>7 de Agosto</h1>
          <h3>
            Batalla de Boyacá, una <br /> batalla por la libertad
          </h3>
        </BannerTitle>
      </BannerTitleCtn>
    </BannerCtn>
  );
};

export default Banner;
