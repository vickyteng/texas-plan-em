import database from 'database/firebase';
import ActionList from 'actions/ActionList';

export const submitCard = (value) => ({
  type: ActionList.GAME.SUBMIT_CARD,
  value
});

export const selectCard = (value) => ({
  type: ActionList.GAME.SELECT_CARD,
  value
});

export const flipCards = () => ({
  type: ActionList.GAME.FLIP_CARDS
});

export const resetGame = () => ({
  type: ActionList.GAME.RESET_GAME
});

export const playerList = (players) => ({
    type: ActionList.GAME.UPDATE_PLAYERS,
    players
});

export const submittedCards = (cards) => ({
    type: ActionList.GAME.SUBMITTED_CARDS,
    cards
});

export const watchPlayerList = (dispatch, gameId) => {
    return database.ref(`/sessions/${gameId}/Users`).on('value', (snapshot) => {
        dispatch(playerList(snapshot.val()));
    });
};

export const watchCardsUp = (dispatch, gameId) => {
    return database.ref(`/sessions/${gameId}/cardsUp`).on('value', (snapshot) => {
        dispatch(flipCards(snapshot.val()));
    });
};

export const watchSubmittedCards = (dispatch, gameId) => {
    return database.ref(`sessions/${gameId}/submitted`).on('value', (snapshot) => {
        dispatch(submittedCards(snapshot.val()));
    });
};

export const setSubmitCard = (gameId, player, card) => {
    return dispatch => database.ref(`sessions/${gameId}/submitted/${player}`).set({card: card});
};

export const setCardsUp = (gameId) => {
    return dispatch => database.ref(`sessions/${gameId}/cardsUp`).set(true);
};

export const sendResetGame = (gameId) => {
    return dispatch => { 
        return database.ref(`sessions/${gameId}/`).update({
            submitted: {},
            cardsUp: false
        });
    }
}