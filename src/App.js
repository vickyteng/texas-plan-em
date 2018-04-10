import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{size: 4, offset:4}} >
          Test
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
