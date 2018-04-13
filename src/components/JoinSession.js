import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateSession from 'components/CreateSession';
import { startSession } from 'actions/sessionActions';


export class JoinSession extends React.Component {
    constructor(props, context) {
        super(props, context);
        props.setSession(props.match.params.id);
    }

    render() {
        return (
            <CreateSession history={this.props.history} />
        );
    }
}

JoinSession.defaultProps = {
    
};

JoinSession.propTypes = {
    
};

const mapDispatchToProps = (dispatch) => ({
    setSession: session => dispatch(startSession(session))
});

export default connect(undefined, mapDispatchToProps)(JoinSession);
