import gameReducer from 'reducers/gameReducer';

describe('Game Reducer', () => {
  const initialState = {
    selectedValue: undefined,
    values: [1, 2, 3, 5, 8, 13, "?"],
    players: {},
    cardsUp: false,
    submitted: false
  };

  it('should set default state', () => {
    expect(gameReducer(undefined, {
      type: '@@INIT'
    })).toEqual(initialState);
  });

  it('should select card', () => {
    expect(gameReducer(initialState, {
      type: 'SELECT_CARD',
      value: 8
    })).toEqual({
      ...initialState,
      selectedValue: 8
    });
  });

  it('should submit card', () => {
    expect(gameReducer(initialState, {
      type: 'SUBMIT_CARD'
    })).toEqual({
      ...initialState,
      submitted: true
    });
  });

  it('should flip cards', () => {
    expect(gameReducer(initialState, {
      type: 'FLIP_CARDS',
      value: true
    })).toEqual({
      ...initialState,
      cardsUp: true
    });
  });

  // I think the functionality is wrong since this test is failing
  it('should reset game', () => {
    const state = {
      selectedValue: 3,
      values: [1, 2, 3, 5, 8, 13, "?"],
      players: {},
      cardsUp: true,
      submitted: true
    }

    expect(gameReducer(state, {
      type: 'RESET_GAME'
    })).toEqual(initialState);
  });

});

