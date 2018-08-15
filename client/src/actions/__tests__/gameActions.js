import * as gameActions from 'actions/gameActions';

describe('Game Actions', () => {
  it('should select a card', () => {
    expect(gameActions.selectCard('13')).toEqual({
      type: 'SELECT_CARD',
      value: '13',
    });
  });

  it('should submit a card', () => {
    expect(gameActions.submitCard('13')).toEqual({
      type: 'SUBMIT_CARD',
      value: '13',
    });
  });

  it('should update that a card has been submitted', () => {
    const cards = {
      'player1': {card: 5},
    };

    expect(gameActions.submittedCards(cards)).toEqual({
      type: 'SUBMITTED_CARDS',
      cards: cards,
    });
  });

  it('should flip cards', () => {
    expect(gameActions.flipCards()).toEqual({
      type: 'FLIP_CARDS',
    });
  });

  // it('should reset the game', () => {
  //   expect(gameActions.resetGame()).toEqual({
  //     type: 'RESET_GAME'
  //   });
  // });

  it('should update player list', () => {
    const players = {
      'player1': { 
        moderator: true, 
        name: "Vicks", 
        role: "Participant" 
      } 
    };

    expect(gameActions.playerList(players)).toEqual({
      type: 'UPDATE_PLAYERS',
      players: players
    });
  });
});
