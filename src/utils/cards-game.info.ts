export interface cardGameInfoI {
  id: number;
  type: 'card' | 'image';
  info: string;
}

export const cardsGameInfo: cardGameInfoI[] = [
  {
    id: 0,
    type: 'card',
    info: 'Simón Bolivar',
  },
  {
    id: 0,
    type: 'image',
    info: '/static/cards/simon-bolivar.webp',
  },
  {
    id: 1,
    type: 'card',
    info: 'José María Barreiro',
  },
  {
    id: 1,
    type: 'image',
    info: '/static/characters/barreiro.webp',
  },
  {
    id: 2,
    type: 'card',
    info: 'Fransisco de Paula Santander',
  },
  {
    id: 2,
    type: 'image',
    info: '/static/characters/santander.jpg',
  },
];
