import React from 'react';

import HomeCard from '@components/atoms/home-card/HomeCard';

import { HomeGridDiv } from './styles';

const HomeGrid = () => {
  return (
    <HomeGridDiv>
      <HomeCard
        title="Preescolar"
        button="¡Echa un vistazo!"
        desc="Los niños de preescolar..."
        image="/static/cards/independencia-3.jpg"
        link="/videos?v=https://www.youtube.com/embed/NR_S4cvqu4c"
      />

      <HomeCard
        title="Galería"
        button="¡Echa un vistazo!"
        desc="Observa detalladamente las imágenes de cada uno de los momentos cruciales que desencadenaron esta gran batalla"
        image="/static/cards/batalla-img.jpg"
        link="/gallery"
      />

      <HomeCard
        title="Museo"
        button="¡Descúbrelos!"
        desc="Descubre quiénes fueron los personajes principales que participaron en la Batalla de Boyacá"
        image="/static/cards/simon-bolivar.webp"
        link="/museum"
      />

      <HomeCard
        title="Lo que nos une a los colombianos"
        button="¡Veamos esas cualidades!"
        desc="Los jóvenes de 8° y 9° han preparado una sección donde enmarcan lo que nos une a nosotros como colombianos"
        image="/static/cards/colombianos.webp"
        link="/videos?v=https://www.youtube.com/embed/CqCiGSKQSKo"
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
        desc='Los estudiantes de 11° han elaborado un material audiovisual donde, de manera didáctica muestran "Nuestra historia no contada"'
        image="/static/cards/independencia-2.jpg"
        link="/videos?v=https://www.youtube.com/embed/jlu9-7JjE78"
      />

      <HomeCard
        title="Reportaje"
        button="¡Escúchalo!"
        desc="¿De qué se trata esta fecha histórica? Estudiantes de sexto grado"
        image="/static/cards/bandera.jpg"
        link="/videos?v=https://www.youtube.com/embed/jlu9-7JjE78"
      />

      <HomeCard
        title="Un reportaje con la historia"
        button="¡Quiero verlo!"
        desc="Los estudiantes de 10° grado han tomado papel de reporteros con el fin de hacer un programa informativo que nos oriente más sobre esta temática"
        image="/static/cards/mic.jpeg"
        link="/videos?v=https://www.youtube.com/embed/I7k5RRlWWu4"
      />

      <HomeCard
        title="Noticiero"
        button="¡Primaria presente!"
        desc="Por medio de este noticiero infantil, te podrás enterar acerca de los acontecimientos más relevantes ocurridos en este hecho histórico"
        image="https://materialgalacticow.files.wordpress.com/2012/01/2099843_460s.jpg?w=376"
        link="/videos?v=https://www.youtube.com/embed/ZemdAuUMCVU"
      />
    </HomeGridDiv>
  );
};

export default HomeGrid;
