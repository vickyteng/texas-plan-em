import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { startStartSession, startJoinSession } from 'actions/sessionActions';
import { editUser } from 'actions/userActions';

export const CreateSession = props => (
  <div className="create-session">
    <div className="card create-session-outer">
      <div className="top">
        <h1>
          Texas Plan 'em
        </h1>
      </div>
      <div className="bottom">
        <div className="card create-session-inner">
          <TextField
            id="name"
            className="font-inherit"
            floatingLabelText="Name"
            fullWidth={true}
            value={props.name || ''}
            onChange={e => props.editUser({ name: e.target.value })}
          />
          {
            props.session
            && (<TextField
              id="url"
              className="font-inherit"
              floatingLabelText="URL"
              fullWidth={true}
              value={props.session ? `${window.location.origin}/join/${props.session}` : ''}
              inputprops={{
                readOnly: true,
              }}
            />
            )}
          {
            props.session
            && (<RadioButtonGroup className="radio-group font-inherit" name="role" onChange={(event, value) => props.editUser({ role: value })}>
              <RadioButton
                value="Participant"
                label="Participant"
              />
              <RadioButton
                value="Observer"
                label="Observer"
              />
            </RadioButtonGroup>
            )}
          {
            props.session
              ? (<button
                type="button"
                className="button button--alt"
                id="join-session"
                color="inverse"
                disabled={!props.name || !props.role}
                onClick={() => props.startJoinSession(props.session, {
                  id: props.userId, name: props.name, role: props.role, moderator: props.moderator,
                }).then(() => props.history.push(`/game/${props.session}`))}
              >
                Join Session
              </button>
              )
              : (<button
                type="button"
                className="button button--alt"
                id="start-session"
                onClick={() => props.startStartSession(props.name)}
                disabled={!props.name}
              >
                Start Session
              </button>
              )}
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  userId: state.user.id,
  name: state.user.name,
  role: state.user.role,
  moderator: state.user.moderator || false,
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  startStartSession: name => dispatch(startStartSession(name)),
  startJoinSession: (session, user) => dispatch(startJoinSession(session, user)),
  editUser: name => dispatch(editUser(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSession);
