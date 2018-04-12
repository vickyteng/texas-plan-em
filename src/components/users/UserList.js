import * as React from 'react';
import {
    Col,
    Container,
    Label,
    ListGroup,
    ListGroupItem,
    Row
} from 'reactstrap';
import UserItem from 'components/users/UserItem';

class UserList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: [
                {
                    name: 'Juan Flores',
                    isModerator: true,
                    isReady: true
                }, {
                    name: 'Sinh Nguyen',
                    isModerator: false,
                    isReady: true
                }, {
                    name: 'Matthew Wong',
                    isModerator: false,
                    isReady: false
                }
            ]
        };
    }

    render() {
        return (
            <Container className="component-user-list">
                <Row className="title" noGutters={true}>
                    <Col sm={12}>
                        <Label>{this.props.title}</Label>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col sm={12}>
                        <ListGroup className="list-group">
                            {
                                this.state.items.map((item, i) => {
                                  return (
                                    <UserItem key={i}
                                        name={item.name} 
                                        isModerator={item.isModerator} 
                                        isReady={item.isReady}
                                        isParticipant={this.props.type === 'participants'}
                                        />
                                    );
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default UserList;