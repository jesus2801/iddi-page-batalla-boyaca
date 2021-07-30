import { HomeCardProps } from '@interfaces/props.interfaces';
import React from 'react';

import { HomeCardDiv } from './styles';

const HomeCard = ({ button, desc, image, title }: HomeCardProps) => {
  return (
    <HomeCardDiv theme={{ image }}>
      <div className="image"></div>
      
      <div className="main">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <button>{button}</button>
    </HomeCardDiv>
  );
};

export default HomeCard;
