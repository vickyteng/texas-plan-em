import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButonGroup, RadioButtonGroup } from 'material-ui/RadioButton'; 
import FontAwesome from 'react-fontawesome';
import { startStartSession } from 'actions/sessionActions';
import { editUser } from 'actions/userActions';
import SessionUrl from 'components/SessionUrl';

export const CreateSession = (props) => (
    <div className="create-session">
        <div className="card create-session-outer">
            <div className="top">
                <h1>Texas Plan 'em</h1>
            </div>
            <div className="bottom">
                <div className="card create-session-inner">
                    <TextField
                        id="name"
                        floatingLabelText="Name"
                        fullWidth={true}
                        value={props.name || ''}
                        onChange={e => props.editUser({name: e.target.value})}
                    />
                    {
                        props.session &&
                        <TextField
                            id="url"
                            floatingLabelText="URL"
                            fullWidth={true}
                            value={props.session ? `${window.location.origin}/game/${props.session}` : ''}
                            inputprops={{
                                readOnly: true
                            }}
                        />
                    }
                    {
                        props.session &&
                        <RadioButtonGroup className="radio-group" name="role" onChange={(event, value) => props.editUser({role: value})}>
                            <RadioButton
                                value="Participant"
                                label="Participant"
                            />
                            <RadioButton
                                value="Observer"
                                label="Observer"
                            />
                        </RadioButtonGroup>
                    }
                    {
                        props.session
                        ?
                        <button
                            className="button button--alt"
                            id="join-session"
                            color="inverse"
                            disabled={!props.name || !props.role}
                            onClick={() => props.history.push(`game/${props.session}`)}
                        >
                            Join Session
                        </button>
                        :
                        <button
                            className="button button--alt"
                            id="start-session"
                            onClick={() => props.startStartSession(props.name)}
                            disabled={!props.name}
                        >
                            Start Session
                        </button>
                    }
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    name: state.user.name,
    role: state.user.role,
    session: state.session
  })
  
  const mapDispatchToProps = dispatch => ({
    startStartSession: name => dispatch(startStartSession(name)),
    editUser: name => dispatch(editUser(name))
  });

export default connect(mapStateToProps, mapDispatchToProps)(CreateSession);