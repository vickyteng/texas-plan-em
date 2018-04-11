import * as React from 'react';
import {
    Col,
    Container,
    Label,
    ListGroup,
    ListGroupItem,
    Row
} from 'reactstrap';

class UserList extends React.Component {

    render() {
        return (
            <Container className="component-user-list">
                <Row className="title" noGutters={true}>
                    <Col sm={12}>
                        <Label>Participant</Label>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col sm={12}>
                        <ListGroup className="list-group">
                            <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default UserList;