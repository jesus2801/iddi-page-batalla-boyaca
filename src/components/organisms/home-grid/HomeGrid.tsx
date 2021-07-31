import React from 'react';

import HomeCard from '@components/atoms/home-card/HomeCard';

import { HomeGridDiv } from './styles';

const HomeGrid = () => {
  return (
    <HomeGridDiv>
      <HomeCard
        title="Galería"
        button="¡Echa un vistazo!"
        desc="Observa detalladamente las imágenes de cada uno de los momentos cruciales que desencadenaron esta gran batalla"
        image="/static/cards/batalla-img.jpg"
        link="/gallery"
      />

      <HomeCard
        title="Museo"
        button="¡Descubre a estos héroes!"
        desc="Descubre quiénes fueron cada uno de los principales personajes importantes que participaron en el marco de esta batalla de Boyacá"
        image="/static/cards/simon-bolivar.webp"
        link="#!"
      />

      <HomeCard
        title="Lo que nos representa"
        button="¡Veamos esas cualidades!"
        desc="Los jóvenes de 8° y 9° han preparado una sección en donde enmarcan lo que nos representa a nosotros como colombianos"
        image="/static/cards/colombianos.webp"
        link="/videos?v=https://www.youtube.com/embed/jlu9-7JjE78"
      />

      <HomeCard
        title="Datos curiosos"
        button="¡Cuéntame más!"
        desc="Los estudiantes de 7° grado han preparado una serie de sorprendentes datos curiosos sobre nuestro proceso de independencia"
        image="/static/cards/independencia.jpg"
        link="/videos?v=https://www.youtube.com/embed/jlu9-7JjE78"
      />

      <HomeCard
        title="La historia no contada de nuestra independencia"
        button="¡Pues cuéntamela!"
        desc='Los estudiantes de 11° han elaborado un material audiovisual donde de manera didactica muestran "Nuestra historia no contada"'
        image="/static/cards/independencia-2.jpg"
        link="/videos?v=https://www.youtube.com/embed/jlu9-7JjE78"
      />

      <HomeCard
        title="Salve usted la patria"
        button="¡A por ello!"
        desc="Los estudiantes de 6°"
        image="/static/cards/bandera.jpg"
        link="/videos?v=https://www.youtube.com/embed/jlu9-7JjE78"
      />

      <HomeCard
        title="Reportería"
        button="¡Quiero verlo!"
        desc="Los estudiantes de 10° grado han tomado papel de reporteros con el fin de hacer un programa informativo que nos oriente más sobre esta temática"
        image="/static/cards/mic.jpeg"
        link="/videos?v=https://www.youtube.com/embed/jlu9-7JjE78"
      />

      <HomeCard
        title="Noticiero"
        button="¡Enterate de todo!"
        desc="Por medio de este noticiero infantil te podrás enterar acerca de los acontecimientos más relevantes ocurridos en este hecho histórico"
        image="https://materialgalacticow.files.wordpress.com/2012/01/2099843_460s.jpg?w=376"
        link="/videos?v=https://www.youtube.com/embed/jlu9-7JjE78"
      />
    </HomeGridDiv>
  );
};

export default HomeGrid;
