import * as gameActions from 'actions/gameActions';

// const createMockStore = configureMockStore([thunk]);

describe('Game Actions', () => {
    
    it('should select a card', () => {
        expect(gameActions.selectCard('13')).toEqual({
            type: 'SELECT_CARD',
            value: '13'
        })
    });

    it('should submit a card', () => {
      expect(gameActions.submitCard('13')).toEqual({
        type: 'SUBMIT_CARD',
        value: '13'
      })
    });

    it('should flip cards', () => {
      expect(gameActions.flipCards()).toEqual({
        type: 'FLIP_CARDS'
      })
    });

    it('should clear the table', () => {
      expect(gameActions.submitCard('13')).toEqual({
        type: 'CLEAR_TABLE'
      })
    });

});