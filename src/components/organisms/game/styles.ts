import styled from '@emotion/styled';

export const GameDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 60px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  h2 {
    color: var(--black);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 30px;

    @media (max-width: 415px) {
      width: min-content;
    }
  }

  img {
    width: 60px;
    margin-right: 17px;
  }
`;

export const ContentDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuestionDiv = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;

  -webkit-box-shadow: 3px 5px 10px 1px rgba(230, 230, 230, 1);
  -moz-box-shadow: 3px 5px 10px 1px rgba(230, 230, 230, 1);
  box-shadow: 3px 5px 10px 1px rgba(230, 230, 230, 1);

  p {
    font-size: 21px;
  }
`;

export const AnswersDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .card {
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 15px;

    cursor: pointer;

    -webkit-box-shadow: 3px 5px 10px 1px rgba(230, 230, 230, 1);
    -moz-box-shadow: 3px 5px 10px 1px rgba(230, 230, 230, 1);
    box-shadow: 3px 5px 10px 1px rgba(230, 230, 230, 1);

    p {
      color: var(--black);
    }

    &.valid {
      background-color: #0bfa57;
      p {
        color: #fff;
      }
    }

    &.invalid {
      background-color: #fb0a39;
      p {
        color: #fff;
      }
    }
  }
`;

export const SubmitButtton = styled.button`
  margin-top: 20px;
  width: 100%;
  border: none;
  border-radius: 6px;
  outline: none;
  padding: 6px 15px;

  background-color: var(--blue);
  color: #fff;

  cursor: pointer;

  &.inactive {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
