import React, { useState } from 'react';

import Layout from '@components/template/layout';

import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideTitlediv } from '@styles/gallery.styles';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { info } from 'utils/gallery.info';
import ReturnButton from '@components/atoms/return-button/ReturnButton';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const gallery = () => {
  const [slideTitle, setSlideTitle] = useState(
    'Galería de momentos Batalla de Boyacá'
  );

  return (
    <Layout title="Galería">
      <ReturnButton />
      <SlideTitlediv>
        <h3>{slideTitle}</h3>
      </SlideTitlediv>
      <Swiper
        className="swiper"
        slidesPerView={1}
        navigation={true}
        pagination={{ type: 'progressbar' }}
        onSlideChange={swiper => {
          setSlideTitle(info[swiper.activeIndex]);
        }}
      >
        <SwiperSlide>
          <img src="/static/galeria/0.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/5.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/6.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/7.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/8.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/9.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/10.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/galeria/11.jpg" />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
};

export default gallery;
