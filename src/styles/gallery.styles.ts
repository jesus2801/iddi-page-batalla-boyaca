import styled from '@emotion/styled';

export const SlideTitlediv = styled.div`
  position: fixed;
  left: 20px;
  bottom: 20px;
  margin-right: 20px;

  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px;
  border-radius: 4px;

  h3 {
    font-size: 30px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    margin: 0;

    @media (max-width: 730px) {
      font-size: 25px;
    }

    @media (max-width: 610px) {
      font-size: 20px;
    }
  }

  z-index: 9;
`;
