import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;

  transition: 300ms ease transform;

  .image {
    width: 100%;
    height: 250px;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-image: url('${(props: any) => props.theme.image}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .main {
    padding: 20px;

    h3 {
      color: var(--black);
      font-family: 'Montserrat', sans-serif;
      font-size: 21px;
    }

    p {
      margin: 10px 0 0 0;
      color: var(--black);
      font-size: 14px;
    }
  }

  &:hover {
    transform: translateX(20px);

    @media (max-width: 620px) {
      transform: translateX(10px);
    }
  }

  -webkit-box-shadow: 2px 6px 9px 0px rgba(190, 190, 190, 1);
  -moz-box-shadow: 2px 6px 9px 0px rgba(190, 190, 190, 1);
  box-shadow: 2px 6px 9px 0px rgba(190, 190, 190, 1);
`;
