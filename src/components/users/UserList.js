import * as React from 'react';
import UserItem from 'components/users/UserItem';
import { List } from 'material-ui/List';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

class UserList extends React.Component {

    _itemRenderCount = 0

    render() {
        return (
            <div className="component-user-list">
                <Toolbar className="component-user-list-title">
                    <ToolbarTitle text={this.props.title} />
                </Toolbar>
                <List className="component-user-list-list">
                    { this._renderUsers(this.props.items || []) }
                </List>
            </div>
        );
    }

    _renderUsers (userList) {
        const items = userList.map((item, i) => {
            return <UserItem key={i}
                name={item.name} 
                isModerator={item.isModerator} 
                isReady={item.isReady}
                isParticipant={this.props.type === 'participants'}
                onRender={() => this._onUserItemRender() }
                />
        });

        return items;
    }

    _onUserItemRender () {
        this._itemRenderCount++;
        if (this._itemRenderCount === this.props.items.length && this.props.onUserChange) {
            this.props.onUserChange(this.props.items);
        }
    }

}

export default UserList;