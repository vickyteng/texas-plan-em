import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';
import { startStartSession } from 'actions/sessionActions';
import { editUser } from 'actions/userActions';

export const StartSession = (props) => (
  <Container>
    <Row>
      <Col sm={{size: 6, offset:3}} >
        <Card body color="light">
          <Form>
            <FormGroup row>
              <Label md={2} for="name">Name</Label>
              <Col md={10}>
                <Input
                  name="name"
                  id="name"
                  onChange={e => props.editUser({name: e.target.value})} value={props.name || ''}
                />
              </Col>
            </FormGroup>
            {
              props.session &&  
              <FormGroup row>
                <Label md={2} for="session-url">Url</Label>
                <Col md={10}>
                  <Input
                    plaintext={true}
                    name="session-url"
                    id="session-url"
                  >
                    {`${window.location.origin}/session/${props.session}`}
                  </Input>
                </Col>
              </FormGroup>
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
          {
            props.session
            ?
            <Button id="join-session">Join Session</Button>
            :
            <Button id="start-session" onClick={() => props.startStartSession(props.name)}>Start Session</Button>
          }
        </Card>
      </Col>
    </Row>
  </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartSession);
