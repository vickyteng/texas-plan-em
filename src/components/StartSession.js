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
import { setUserName } from 'actions/userActions';

export const StartSesssion = (props) => (
  <Container>
    <Row>
      <Col sm={{size: 6, offset:3}} >
        <Card body color="light">
          <Form>
            <FormGroup row>
              <Label md={2} for="name">Name</Label>
              <Col md={10}>
                <Input name="name" id="name" onChange={e => props.setUserName(e.target.value)} value={props.name || ''} />
              </Col>
            </FormGroup>
          </Form>
          <Button onClick={() => props.startStartSession(props.name)}>Start Session</Button>
        </Card>
      </Col>
    </Row>
  </Container>
);

const mapStateToProps = state => ({
  name: state.user.name
})

const mapDispatchToProps = dispatch => ({
  startStartSession: name => dispatch(startStartSession(name)),
  setUserName: name => dispatch(setUserName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartSesssion);
