import React from 'react';
import { connect } from 'react-redux';
import Game from 'components/Game';
import {watchPlayerList, watchSubmittedCards, setSubmitCard, setCardsUp, watchCardsUp, sendResetGame} from 'actions/gameActions';

class GameContainer extends React.Component {
    render() {
        return (
            <Game session={this.props.match.params.id} {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    game: state.game,
    user: state.user,
    session: state.session
});

const mapDispatchToProps = (dispatch, props) => {
    const session = props.match.params.id;
    watchPlayerList(dispatch, session);
    watchSubmittedCards(dispatch, session);
    watchCardsUp(dispatch, session);
    return {
        setSubmitCard: (session, playerId, card) => {dispatch(setSubmitCard(session, playerId, card))},
        setCardsUp: (session) => {dispatch(setCardsUp(session))},
        resetGame: (session) => {dispatch(sendResetGame(session))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);