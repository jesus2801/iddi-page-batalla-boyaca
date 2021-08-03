import React from 'react';

import { FooterStyles } from './styles';

const Footer = () => {
  return (
    <FooterStyles>
      <p>
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
        IDDI Nueva Granada & Jesús García
      </p>
    </FooterStyles>
  );
};

export default Footer;
