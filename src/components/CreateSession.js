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
        {/* <div className="app-title">
            <h1>Texas Plan 'em</h1>
        </div> */}
        {/*
        <div className="session-card">
            <div className="session-card-title">
                <h3>Create New Game</h3>
            </div>
            <div className="session-card-body">
                <Row>
                    <Col>
                        <Form
                            onSubmit={
                                (e) => {
                                    e.preventDefault();

                                    if (!props.session && props.name) {
                                        props.startStartSession(props.name);
                                    }
                                }
                            }
                        >
                            <FormGroup>
                                <InputGroup>
                                    <Input
                                        placeholder="Name"
                                        name="name"
                                        id="name"
                                        onChange={e => props.editUser({name: e.target.value})}
                                        value={props.name || ''}
                                    />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <FontAwesome name="user" fixedWidth={true} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                            <SessionUrl session={props.session} />
                            {
                                props.session &&
                                <hr/>
                            }
                            {
                                props.session &&
                                <FormGroup tag="fieldset">
                                    <legend>Are you Participating or Observing?</legend>
                                    <FormGroup check>
                                        <Input
                                        type="radio"
                                        name="user-type"
                                        id="participant"
                                        checked={props.role === 'Participant'}
                                        onChange={() => props.editUser({role: 'Participant'})}

                                        />
                                        <Label check for="participant">
                                        Participant
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                        type="radio"
                                        name="user-type"
                                        id="observer"
                                        checked={props.role === 'Observer'}
                                        onChange={() => props.editUser({role: 'Observer'})}
                                        />
                                        <Label check for="observer">
                                        Observer
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                            }
                        </Form>
                    </Col>
                </Row>
            </div>
            <div className="session-card-footer">
                <Row>
                    <Col>
                        {
                            props.session
                            ?
                            <Button
                                id="join-session"
                                block
                                color="inverse"
                                disabled={!props.name || !props.role}
                            >
                                Join Session
                            </Button>
                            :
                            <Button
                                id="start-session"
                                onClick={() => props.startStartSession(props.name)}
                                block
                                color="inverse"
                                disabled={!props.name}
                            >
                                Start Session
                            </Button>
                        }
                    </Col>
                </Row>
            </div>
        </div>
                    */}
        {/* <Card className="session-card">
            <CardTitle title="Create New Game" />
            <CardText>
                <TextField
                    floatingLabelText="Name"
                    fullWidth={true}
                    value={props.name || ''}
                    onChange={e => props.editUser({name: e.target.value})}
                />
            </CardText>
        </Card> */}
        <div className="card create-session-outer">
            <div className="top">
                <h1>Texas Plan 'em</h1>
            </div>
            <div className="bottom">
                <div className="card create-session-inner">
                    <TextField
                        floatingLabelText="Name"
                        fullWidth={true}
                        value={props.name || ''}
                        onChange={e => props.editUser({name: e.target.value})}
                    />
                    {
                        props.session &&
                        <TextField
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