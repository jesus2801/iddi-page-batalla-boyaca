import styled from '@emotion/styled';

export const HomeGridDiv = styled.div`
  width: 90%;
  margin: 40px auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1270px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
