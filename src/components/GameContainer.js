import React from 'react';
import { connect } from 'react-redux';
import Game from 'components/Game';
import {watchPlayerList, watchSubmittedCards, setSubmitCard} from 'actions/gameActions';
import { startSession, leaveSession } from 'actions/sessionActions';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);

        if (!props.session) {
            props.setSession(props.match.params.id, props.user.id);
        }

        if (!props.user.id) {
            props.history.push(`/join/${props.match.params.id}`)
        }
    }

    componentDidMount() {
        const session = this.props.session;
        const userId = this.props.user.id;

        if (this.props.session) {
            window.addEventListener('beforeunload', (event) => {
                event.preventDefault();

                leaveSession(session, userId);
            });
        }
    }

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
    return {
        setSession: (session, userId) => dispatch(startSession(session, userId)),
        setSubmitCard: (session, playerId, card) => dispatch(setSubmitCard(session, playerId, card))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);