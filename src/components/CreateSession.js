import React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { startStartSession } from 'actions/sessionActions';
import { editUser } from 'actions/userActions';

export const CreateSession = (props) => (
    <div className="create-session">
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
                            {
                                props.session &&
                                <FormGroup>
                                    <InputGroup>
                                        <Input
                                            name="session-url"
                                            id="session-url"
                                            value={`${window.location.origin}/session/${props.session}`}
                                            readOnly
                                        />
                                        <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <FontAwesome name="copy" fixedWidth={true} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            }
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