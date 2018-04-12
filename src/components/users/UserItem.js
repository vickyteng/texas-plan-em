import * as React from 'react';
import {
    Col,
    ListGroupItem,
    Row
} from 'reactstrap';
import * as Ionicon from 'react-icons/lib/io'

const UserItem = (props) => {
    const moderatorIcon = props.isModerator ? <Ionicon.IoAndroidArrowDropright className="icon-moderator" /> : '';
    const readyIcon = props.isReady && props.isParticipant ? <Ionicon.IoAndroidCheckbox className="icon-ready" /> : '';

    return (
        <ListGroupItem className="component-user-item">
            <Row noGutters={true} className="item-row">
                <Col sm={1}  className="item-col item-col-moderator">{moderatorIcon}</Col>
                <Col sm={9} className="item-col item-col-name">{props.name}</Col>
                <Col sm={2}  className="item-col item-col-ready">{readyIcon}</Col>
            </Row>
        </ListGroupItem>
    );
}

export default UserItem;