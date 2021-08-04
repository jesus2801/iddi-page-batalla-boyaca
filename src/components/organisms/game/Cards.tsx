import React, { MouseEvent, useEffect, useState } from 'react';
import { cardGameInfoI, cardsGameInfo } from 'utils/cards-game.info';
import { CardsCtn } from './cards.styles';
import { GameDiv, Title } from './main.styles';

const Cards = () => {
  const [validSound, setValidSound] = useState(
    null as null | HTMLAudioElement
  );
  const [invalidSound, setInvalidSound] = useState(
    null as null | HTMLAudioElement
  );

  const [activeCard, setActiveCard] = useState({
    card: null as null | HTMLDivElement,
    info: null as null | cardGameInfoI,
  });
  const [matchs, setMatchs] = useState([] as number[]);

  const [info, setInfo] = useState([] as cardGameInfoI[]);

  useEffect(() => {
    setInfo(cardsGameInfo.sort(() => Math.random() - 0.5));
    setValidSound(new Audio('/static/sounds/valid.mp3'));
    setInvalidSound(new Audio('/static/sounds/invalid.mp3'));
  }, []);

  let pause = false;

  const onclick = (
    card: cardGameInfoI,
    e: MouseEvent<HTMLDivElement>
  ) => {
    if (matchs.indexOf(card.id) !== -1 || pause) return;

    const element = e.currentTarget;
    element.classList.toggle('active');

    if (activeCard.info) {
      if (card.id === activeCard.info.id) {
        validSound.play();
        setMatchs([...matchs, card.id]);
      } else {
        pause = true;
        invalidSound.play();

        setTimeout(() => {
          element.classList.remove('active');
          activeCard.card!.classList.remove('active');
          pause = false;
        }, 500);
      }

      setActiveCard({
        card: null,
        info: null,
      });
    } else {
      setActiveCard({
        card: e.currentTarget,
        info: card,
      });
    }
  };

  return (
    <GameDiv>
      <Title>
        <img src="/static/icons/pc-game.webp" alt="pc game icon" />
        <h2>Cartas mágicas</h2>
      </Title>

      <CardsCtn>
        {info.map((c, i) => (
          <div
            key={i + 'c'}
            onClick={e => onclick(c, e)}
            className="container"
          >
            <div className="front">
              <p>¡Girame!</p>
            </div>

            {c.type === 'card' ? (
              <div className="back">
                <h3>{c.info}</h3>
              </div>
            ) : (
              <div
                className="back"
                style={{ backgroundImage: `url("${c.info}")` }}
              ></div>
            )}
          </div>
        ))}
      </CardsCtn>
    </GameDiv>
  );
};

export default Cards;
