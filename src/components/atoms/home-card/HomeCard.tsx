import React from 'react';
import Link from 'next/link';

import { HomeCardProps } from '@interfaces/props.interfaces';

import { HomeCardDiv } from './styles';

import Fade from 'react-reveal/Fade';

const HomeCard = ({
  button,
  desc,
  image,
  title,
  link,
}: HomeCardProps) => {
  return (
    <Fade>
      <HomeCardDiv theme={{ image }}>
        <div className="image"></div>

        <div className="main">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <Link href={link}>
          <button>{button}</button>
        </Link>
      </HomeCardDiv>
    </Fade>
  );
};

export default HomeCard;
