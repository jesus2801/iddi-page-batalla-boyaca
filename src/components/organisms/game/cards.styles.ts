import styled from '@emotion/styled';

export const CardsCtn = styled.div`
  width: 80%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .container {
    position: relative;

    .front,
    .back,
    & {
      width: 100%;
      height: 300px;
    }

    .front,
    .back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border-radius: 6px;

      -webkit-box-shadow: 2px 6px 9px 0px rgba(220, 220, 220, 1);
      -moz-box-shadow: 2px 6px 9px 0px rgba(220, 220, 220, 1);
      box-shadow: 2px 6px 9px 0px rgba(220, 220, 220, 1);

      cursor: pointer;
    }

    .front {
      z-index: 2;
      transform: rotateY(0deg);
      transition: all 250ms linear;
    }

    .back {
      transition: all 250ms linear;
      transform: rotateY(180deg);

      h3 {
        font-size: 20px;
        color: var(--black);
      }

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &.active .front {
      transform: rotateY(180deg);
    }

    &.active .back {
      transform: rotateY(360deg);
    }
  }
`;
