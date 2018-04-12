import database from 'database/firebase';
import ActionList from 'actions/ActionList';

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

export const playerList = (players) => ({
    type: ActionList.GAME.UPDATE_PLAYERS,
    players
});

export const watchPlayerList = (dispatch, gameId) => {
    return database.ref(`/sessions/${gameId}/Users`).on('value', (snapshot) => {
        dispatch(playerList(snapshot.val()));
    });
};