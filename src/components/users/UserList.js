import * as React from 'react';
import { connect } from 'react-redux';
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
                    { this._renderPlayers(this.props.items || {}, this.props.submitted || {}) }
                </List>
            </div>
        );
    }

    _renderPlayers (playerList, submittedList) {
        const listType = (this.props.type || 'observer').toLowerCase();
        const items = Object.keys(playerList)
            .map(key => {
                let player = JSON.parse(JSON.stringify(playerList[key]));
                player.key = key;
                return player; 
            })
            .filter(player => {
                const playerRole = (player.role || 'observer').toString().toLowerCase()
                return playerRole === listType;
            })
            .map((player, index) => {
                const isReady = submittedList[player.key] != null;
                const playerRole = (player.role || 'observer').toString().toLowerCase();
                return <UserItem 
                    key={index}
                    name={player.name} 
                    isModerator={player.moderator} 
                    isReady={isReady}
                    isParticipant={playerRole === 'participant'}
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

const mapStateToProps = state => ({
    submitted: state.game.submitted
});
  
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);