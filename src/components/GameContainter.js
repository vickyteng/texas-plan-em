import React from 'react';
import { connect } from 'react-redux';
import Game from 'components/Game';
import {watchPlayerList} from 'actions/gameActions';

class GameContainter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            session: props.location.pathname.split('/')[2]
        }
    }

    render() {
        return (
            <Game session={this.state.session} />
        )
    }

}

const mapStateToProps = state => ({
    players: state.players,
    session: state.session
});

const mapDispatchToProps = (dispatch, props) => {
    const session = props.location.pathname.split('/')[2];
    watchPlayerList(dispatch, session);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainter);