import * as React from 'react';
import { ListItem } from 'material-ui/List';
import * as Ionicon from 'react-icons/lib/io'

class UserItem extends React.Component {
    
    render() {
        const moderatorIcon = this.props.isModerator ? <Ionicon.IoAndroidSend className="component-user-item-icon-moderator" /> : '';
        const readyIcon = this.props.isReady && this.props.isParticipant ? <Ionicon.IoAndroidDone className="component-user-item-icon-ready" /> : '';

        return (
            <ListItem 
                className="component-user-item"
                insetChildren={true}
                primaryText={this.props.name}
                leftIcon={moderatorIcon}
                rightIcon={readyIcon}
                >
            </ListItem>
        );
    }

    componentDidMount () {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }
}

export default UserItem;