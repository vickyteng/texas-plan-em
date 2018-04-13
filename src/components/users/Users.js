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
        return (
            <div className="component-users noselect">
                <Toolbar>
                    <ToolbarTitle text="USERS" />
                    { this._renderIcon(this._onClick.bind(this)) }
                </Toolbar>
                <div className="component-users-list-container"
                    style={{
                        maxHeight: this.state.isExpanded ? this.state.height + 'px' : 0,
                        transition: 'max-height 0.1s ' + (this.state.isExpanded ? 'ease-in' : 'ease-out')
                    }}
                >
                    <UserList type="participant" items={this.props.players} title="Participants" onUserChange={() => this._onUserChange() } />
                    <UserList type="observer" items={this.props.players} title="Observers" onUserChange={() => this._onUserChange() } />
                </div>
            </div>
        );
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
  })
  
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Users);