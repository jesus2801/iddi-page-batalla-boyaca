import React from 'react';

import { LoaderDiv } from './styles';

const loader = () => {
  return (
    <LoaderDiv className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </LoaderDiv>
  );
};

export default loader;
