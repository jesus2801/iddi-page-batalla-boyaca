import React, { MouseEvent, useState } from 'react';

import Layout from '@components/template/layout';
import ReturnButton from '@components/atoms/return-button/ReturnButton';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { areCoordsInside } from 'functions';
import { MuseumCoords } from 'utils/museum-coords';
import { MuseumCard, GlobalStyle } from '@styles/museum.styles';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const museum = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(
    null as null | { desc: string; name: string }
  );

  const onMove = (
    e: MouseEvent<HTMLImageElement>,
    imageNumber: number
  ) => {
    const x =
      (e.clientX - e.currentTarget.offsetLeft) *
      (e.currentTarget.naturalWidth / e.currentTarget.width);
    const y =
      (e.clientY - e.currentTarget.offsetTop) *
      (e.currentTarget.naturalWidth / e.currentTarget.width);

    const element = areCoordsInside({
      coords: { x, y },
      polygonCoords: MuseumCoords[imageNumber],
    });

    if (element.valid) {
      if (
        selectedCharacter &&
        selectedCharacter.name === element.info.name
      )
        return;
      setSelectedCharacter(element.info);
    } else {
      if (selectedCharacter === null) return;
      setSelectedCharacter(null);
    }
  };

  return (
    <Layout title="Museo">
      <GlobalStyle />

      <ReturnButton />
      <MuseumCard className={selectedCharacter ? 'active' : ''}>
        {selectedCharacter && (
          <>
            <h2>{selectedCharacter.name}</h2>
            <p>{selectedCharacter.desc}</p>
          </>
        )}
      </MuseumCard>

      <Swiper
        className="swiper"
        slidesPerView={1}
        navigation={true}
        pagination={{ type: 'progressbar' }}
      >
        <SwiperSlide>
          <img
            src="/static/museum/1.png"
            onMouseMove={e => onMove(e, 0)}
            className="normal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/static/museum/2.png"
            onMouseMove={e => onMove(e, 1)}
            className="normal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/static/museum/3.png"
            onMouseMove={e => onMove(e, 2)}
            className="normal"
          />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default museum;
