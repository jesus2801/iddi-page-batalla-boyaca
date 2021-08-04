import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { questionsData } from 'utils/questions.info';

import Swal from 'sweetalert2';

import {
  GameDiv,
  Title,
  ContentDiv,
  QuestionDiv,
  AnswersDiv,
  SubmitButtton,
} from './styles';

const Game = () => {
  const questions = questionsData.sort();
  const answersRef = useRef(null as null | HTMLDivElement);

  const [actualQuestion, setActualQuestion] = useState({
    q: questions[0],
    i: 0,
  });
  const [qAnswered, setQAnswered] = useState(false);

  const [points, setPoints] = useState(0);
  const [validSound, setValidSound] = useState(
    null as null | HTMLAudioElement
  );
  const [invalidSound, setInvalidSound] = useState(
    null as null | HTMLAudioElement
  );

  useEffect(() => {
    setValidSound(new Audio('/static/sounds/valid.mp3'));
    setInvalidSound(new Audio('/static/sounds/invalid.mp3'));
  }, []);

  const handleClick = (
    answer: { msg: string; v?: boolean },
    e: MouseEvent<HTMLDivElement>
  ) => {
    if (qAnswered) return;

    if (answer.v) {
      validSound.play();

      e.currentTarget!.classList.add('valid');
      const divs = e.currentTarget.parentNode!.querySelectorAll('div');
      divs.forEach(d => {
        if (!d.classList.contains('valid')) d.classList.add('invalid');
      });

      setPoints(points + 1);
    } else {
      invalidSound.play();

      const divs = e.currentTarget.parentNode!.querySelectorAll('div');
      divs.forEach(d => {
        d.classList.add('invalid');
      });
    }

    setQAnswered(true);
  };

  const handleNext = () => {
    if (qAnswered === false) return;

    const divs = answersRef.current!.querySelectorAll('div');

    for (let i = 0, n = divs.length; i < n; i++) {
      divs[i].classList.remove('valid', 'invalid');
    }

    setQAnswered(false);

    if (questions.length - 1 === actualQuestion.i) {
      setActualQuestion({
        q: questions[0],
        i: 0,
      });

      const passed = points > 6;
      Swal.fire(
        '¡Terminado!',
        passed
          ? `Has aprobado el pequeño Quiz, ¡Felicidades!... Nota: ${points}/10`
          : `Losentimos, no has aprobado el pequeño Quiz, no te desanimes, ¡Sigue intentando!... Nota: ${points}/10`,
        passed ? 'success' : 'error'
      );

      setPoints(0);

      return;
    }

    setActualQuestion({
      q: questions[actualQuestion.i + 1],
      i: actualQuestion.i + 1,
    });
  };

  return (
    <GameDiv>
      <Title>
        <img src="/static/icons/pc-game.webp" alt="pc game icon" />
        <h2>Juega Contestando</h2>
      </Title>

      <ContentDiv>
        <QuestionDiv>
          <p>{actualQuestion.q.q}</p>
        </QuestionDiv>
        <AnswersDiv ref={answersRef}>
          {actualQuestion.q.a.map((answer, i) => (
            <div
              className="card"
              onClick={e => handleClick(answer, e)}
              key={i}
            >
              <p>{answer.msg}</p>
            </div>
          ))}
        </AnswersDiv>

        <SubmitButtton
          onClick={handleNext}
          className={qAnswered ? '' : 'inactive'}
        >
          Siguiente
        </SubmitButtton>
      </ContentDiv>
    </GameDiv>
  );
};

export default Game;
