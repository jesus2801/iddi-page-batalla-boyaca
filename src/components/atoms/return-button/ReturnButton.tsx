import React from 'react';
import Link from 'next/link';

import { ReturnButtonStyles } from './styles';

const ReturnButton = () => {
  return (
    <Link href="/">
      <ReturnButtonStyles>Volver</ReturnButtonStyles>
    </Link>
  );
};

export default ReturnButton;
