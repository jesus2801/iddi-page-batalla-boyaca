import Loader from '@components/atoms/loader/loader';
import React, { useEffect, useRef } from 'react';

import {
  AnimationDiv,
  GifAnimation,
  LoaderText,
  AnimationCardDiv,
} from './styles';

const Animation = () => {
  const divRef = useRef(null as HTMLDivElement);

  useEffect(() => {
    if (divRef.current) {
      setTimeout(() => {
        document.querySelector('.c-1')!.classList.add('active');
        for (let i = 2; i < 4; i++) {
          setTimeout(() => {
            document.querySelector('.c-' + i)!.classList.add('active');
          }, i * 140);
        }
      }, 3000);

      setTimeout(() => {
        divRef.current!.classList.add('ocult');
      }, 3500);
    }
  }, []);

  return (
    <>
      <AnimationCardDiv className="c-1"></AnimationCardDiv>
      <AnimationCardDiv className="c-2"></AnimationCardDiv>
      <AnimationCardDiv className="c-3"></AnimationCardDiv>
      <AnimationDiv ref={divRef}>
        <GifAnimation src="/static/horse-animation.gif" />
        <Loader />
        <LoaderText>Preparandose para la batalla...</LoaderText>
      </AnimationDiv>
    </>
  );
};

export default Animation;
