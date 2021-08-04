import { createGlobalStyle } from 'styled-components';
import styled from '@emotion/styled';

export const GlobalStyle = createGlobalStyle`
body {
    overflow: hidden;
}
`;

export const MuseumCard = styled.div`
  position: absolute;
  bottom: 20px;
  margin: auto;
  left: 0;
  right: 0;

  width: 90%;
  max-width: 350px;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;

  -webkit-box-shadow: 2px 6px 9px 0px rgba(220, 220, 220, 1);
  -moz-box-shadow: 2px 6px 9px 0px rgba(220, 220, 220, 1);
  box-shadow: 2px 6px 9px 0px rgba(220, 220, 220, 1);

  z-index: 3;
  transform: translateY(400px);
  transition: transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1);

  &.active {
    transform: translateY(0);
  }

  h2,
  p {
    color: var(--black);
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-size: 14px;
  }
`;
