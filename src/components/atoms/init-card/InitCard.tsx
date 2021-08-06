import React from 'react';
import { Card } from './styles';

const InitCard = () => {
  return (
    <Card theme={{ image: '/static/banner.jpeg' }}>
      <div className="image"></div>

      <div className="main">
        <h3>¡Familia IDDISTA!</h3>
        <p>
          Los invitamos a conmemorar los 202 años de la independencia de
          nuestra amada Colombia. Recuerda quien no conoce su historia
          está condenada a repetirla. Bienvenidos!
        </p>
      </div>
    </Card>
  );
};

export default InitCard;
