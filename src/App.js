import React from 'react';
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

const App = () => (
  <Container>
    <Row>
      <Col sm={{size: 6, offset:3}} >
        <Card body color="light">
          <Form>
            <FormGroup row>
              <Label sm={2} for="name">Name</Label>
              <Col sm={10}>
                <Input name="name" id="name"/>
              </Col>
            </FormGroup>
          </Form>
          <Button>Start Session</Button>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default App;
