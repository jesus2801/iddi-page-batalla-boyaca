import styled from '@emotion/styled';

export const LogoIddi = styled.img`
  position: absolute;
  top: 8px;
  left: 10px;
  z-index: 3;
  width: 100px;
  opacity: 0.65;

  @media (max-width: 1100px) {
    width: 70px;
  }
`;

export const BannerCtn = styled.div`
  position: relative;
  width: 100%;
  height: 340px;

  -webkit-box-shadow: 0px 4px 6px 0px rgba(189, 189, 189, 1);
  -moz-box-shadow: 0px 4px 6px 0px rgba(189, 189, 189, 1);
  box-shadow: 0px 4px 6px 0px rgba(189, 189, 189, 1);
`;

export const BannerImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/static/banner.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 0;
`;

export const BannerTitleCtn = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  background-color: #fff;
  clip-path: polygon(0% 0%, 60% 0%, 100% 100%, 0% 100%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 770px) {
    width: 60%;
  }

  @media (max-width: 620px) {
    width: 70%;
  }

  @media (max-width: 490px) {
    width: 80%;
  }

  @media (max-width: 440px) {
    width: 90%;
  }

  @media (max-width: 390px) {
    width: 100%;
    clip-path: none;
    align-items: center;
  }
`;

export const BannerTitle = styled.div`
  margin: 0 0 0 10%;

  h1 {
    margin: 0 0 0 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 37px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--blue);
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    text-transform: none;
    color: var(--black);
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 30px;
    }

    h3 {
      font-size: 15px;
    }
  }

  @media (max-width: 390px) {
    margin: 0;
  }
`;
