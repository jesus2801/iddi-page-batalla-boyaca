import React from 'react';
import HomeCard from '@components/atoms/home-card/HomeCard';

import { HomeGridDiv } from './styles';

const HomeGrid = () => {
  return (
    <HomeGridDiv>
      <HomeCard
        title="Galería"
        button="¡Echa un vistazo!"
        desc="Observa detalladamente las imagenes de cada uno de los momentos cruciales que desencadenaron esta gran batalla"
        image="/static/cards/batalla-img.jpg"
      />

      <HomeCard
        title="Museo"
        button="¡Describre a estos héroes!"
        desc="Descubre quienes fueron cada uno de los principales personajes importantes que participaron en el marco de esta batalla de Boyacá"
        image="/static/cards/simon-bolivar.webp"
      />

      <HomeCard
        title="Noticiero"
        button="¡Enterate de todo!"
        desc="Por medio de este noticiero infantil te podrás enterar acerca de los acontecimientos más relevantes ocurridos en este hecho histórico"
        image="https://materialgalacticow.files.wordpress.com/2012/01/2099843_460s.jpg?w=376"
      />
    </HomeGridDiv>
  );
};

export default HomeGrid;
