import styled from '@emotion/styled';

export const AnimationDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 9;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  visibility: visible;
  opacity: 1;

  transition: 300ms ease all;

  &.ocult {
    visibility: hidden;
    opacity: 0;
  }
`;

export const LoaderText = styled.p`
  color: var(--black);
`;

export const GifAnimation = styled.img`
  position: absolute;
  width: 300px;

  animation-name: horse;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: -1;

  @keyframes horse {
    from {
      left: 10px;
    }

    to {
      left: calc(100vw - 340px);
    }
  }
`;

export const AnimationCardDiv = styled.div`
  position: fixed;
  transform: translateX(-100vw);
  width: 100vw;
  height: 100vh;

  z-index: 11;

  transition: 1.3s ease transform;

  &.c-1,
  &.c-3 {
    background-color: var(--blue);
  }

  &.c-2 {
    background-color: var(--black);
  }

  &.active {
    transform: translateX(100vw);
  }
`;
