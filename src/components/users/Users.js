import * as React from 'react';
import classNames from 'classnames';
import { 
    Col,
    Container,
    Label,
    Row,
} from 'reactstrap';
import * as Ionicon from 'react-icons/lib/io'
import UserList from 'components/users/UserList';

class Users extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isExpanded: true
        };
    }

    render() {
        return (
            <Container 
                className={classNames({
                    "component-users noselect" : true,
                    "users-collapsed" : !this.state.isExpanded,
                    "users-expanded" : this.state.isExpanded,
                })}
                >
                <Row noGutters={true} className="title">
                    <Col sm={10} className="label-container">
                        <Label>USERS</Label>
                    </Col>
                    <Col sm={2}>
                        <Ionicon.IoAndroidAddCircle className={classNames({
                                "icon icon-expand" : true,
                                "hidden": this.state.isExpanded
                            })} 
                            onClick={ e => this._onClick(e) } 
                            />
                        <Ionicon.IoAndroidRemoveCircle className={classNames({
                                "icon icon-collapse" : true,
                                "hidden" : !this.state.isExpanded
                            })
                            } 
                            onClick={ e => this._onClick(e) } 
                            />
                    </Col>
                </Row>
                <Row noGutters={true} className="lists-container">
                    <UserList type="participants" title="Participants" />
                    <UserList type="observers" title="Observers" />
                </Row>
            </Container>
        );
    }

    _onClick (e) {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

}

export default Users;