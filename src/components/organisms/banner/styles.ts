import styled from '@emotion/styled';

export const BannerImage = styled.img`
  width: 400px;

  @media (max-width: 1000px) {
    position: absolute;
    top: 10px;
    right: 15px;
    width: 100px;
    opacity: 0.8;
  }

  @media (max-width: 490px) {
    width: 70px;
  }
`;

export const ContentCtn = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const BannerCtn = styled.div`
  position: relative;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 160px;

  background-image: url('/static/bandera.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerTitleCtn = styled.div`
  max-width: 400px;
  transform: translateY(53px);

  h1 {
    margin: 0;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    font-size: 50px;
    margin-bottom: 20px;
  }

  h2 {
    margin: 0;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    margin-top: 10px;
    font-size: 25px;
  }

  button {
    border: none;
    border-radius: 100px;
    outline: none;
    padding: 4px 15px;

    background-color: var(--blue);
    color: #fff;
    margin-top: 15px;
  }

  @media (max-width: 1000px) {
    transform: translateY(0px);
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 90px;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 450px) {
    h3 {
      font-size: 60px;
    }

    h1 {
      font-size: 25px;
    }

    margin-left: 10px;
  }
`;
