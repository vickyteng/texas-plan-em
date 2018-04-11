import * as React from 'react';
import { 
    Col,
    Container,
    Label,
    Row,
} from 'reactstrap';
import UserList from 'components/UserList';
import * as Ionic from 'react-icons/lib/io'

class Users extends React.Component {

    render() {
        return (
            <Container className="component-users">
                <Row noGutters={true} className="title">
                    <Col sm={10}>
                        <Label>USERS</Label>
                    </Col>
                    <Col sm={2}>
                        <Ionic.IoAndroidAddCircle className="icon"/>
                    </Col>
                </Row>
                <Row noGutters={true} className="lists-container">
                    <UserList type="participant" />
                    <UserList type="observer" />
                </Row>
            </Container>
        );
    }

}

export default Users;