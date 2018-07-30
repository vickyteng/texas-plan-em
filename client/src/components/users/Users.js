import * as React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import * as Ionicon from 'react-icons/lib/io'
import UserList from 'components/users/UserList';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

class Users extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isExpanded: true,
            height: 5000
        };
    }

    render() {
        const participants = this._filter(this.props.players, 'participant');
        const observers = this._filter(this.props.players, 'observer');

        return (
            <div className="component-users noselect font-inherit">
                <Toolbar>
                    <ToolbarTitle text="PLAYERS" />
                    { this._renderIcon(this._onClick.bind(this)) }
                </Toolbar>
                <div className="component-users-list-container"
                    style={{
                        maxHeight: this.state.isExpanded ? this.state.height + 'px' : 0,
                        transition: 'max-height 0.1s ' + (this.state.isExpanded ? 'ease-in' : 'ease-out')
                    }}
                >
                    { participants.length > 0 ? <UserList items={participants} title="Participants" onUserChange={() => this._onUserChange() } /> : '' }
                    { observers.length > 0 ? <UserList items={observers} title="Observers" onUserChange={() => this._onUserChange() } /> : '' }
                </div>
            </div>
        );
    }

    _filter (players, playerType) {
        const type = (playerType || 'observer').toString().trim().toLowerCase();
        const items = Object.keys(players)
            .map(key => {
                let player = JSON.parse(JSON.stringify(players[key]));
                player.key = key;
                return player; 
            })
            .filter(player => {
                const playerRole = (player.role || 'observer').toString().trim().toLowerCase()
                return playerRole === type;
            });
        return items;
    }

    _onUserChange () {
        const selfNode = ReactDOM.findDOMNode(this);
        this.setState({
            height: selfNode.clientHeight
        });
    }

    _renderIcon (onClickCallback) {
        if (this.state.isExpanded) {
            return <Ionicon.IoAndroidRemoveCircle className="component-users-icon" onClick={onClickCallback} />
        } else {
            return <Ionicon.IoAndroidAddCircle className="component-users-icon" onClick={onClickCallback} />
        }
    }

    _onClick (e) {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

}

const mapStateToProps = state => ({
    players: state.game.players
});
  
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Users);