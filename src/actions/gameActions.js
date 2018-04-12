export const submitCard = (value) => ({
  type: 'SUBMIT_CARD',
  value
});

export const selectCard = (value) => ({
  type: 'SELECT_CARD',
  value
});

export const flipCards = () => ({
  type: 'FLIP_CARDS'
});

export const clearTable = () => ({
  type: 'CLEAR_TABLE'
});

export const addPlayer = (player) => ({
  type: 'ADD_PLAYER',
  player
});