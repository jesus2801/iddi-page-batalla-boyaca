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
        link="/gallery"
      />

      <HomeCard
        title="Museo"
        button="¡Describre a estos héroes!"
        desc="Descubre quienes fueron cada uno de los principales personajes importantes que participaron en el marco de esta batalla de Boyacá"
        image="/static/cards/simon-bolivar.webp"
        link="#!"
      />

      <HomeCard
        title="Lo que nos representa"
        button="¡Veamos esas cualidades!"
        desc="Los jovenes de 8° y 9° han preparado una sección en donde enmarcan lo que nos representa a nosotros como colombianos"
        image="/static/cards/colombianos.webp"
        link="#!"
      />

      <HomeCard
        title="Datos curiosos"
        button="¡Cuentame más!"
        desc="Los estudiantes de 7° grado han preparado un serie de sorprendentes datos curiosos sobre nuestro proceso de independencia"
        image="/static/cards/independencia.jpg"
        link="#!"
      />

      <HomeCard
        title="Noticiero"
        button="¡Enterate de todo!"
        desc="Por medio de este noticiero infantil te podrás enterar acerca de los acontecimientos más relevantes ocurridos en este hecho histórico"
        image="https://materialgalacticow.files.wordpress.com/2012/01/2099843_460s.jpg?w=376"
        link="#!"
      />
    </HomeGridDiv>
  );
};

export default HomeGrid;
