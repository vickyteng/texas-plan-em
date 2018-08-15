import React from 'react';

export default class Waiting extends React.Component {
  messages = [
    'Waiting for other players',
    'Let\'s hope you played your cards right',
    'That\'s a great poker face',
    'What\'s your bet going to be',
    'Everyone wins in Texas Plan \'Em',
  ];

  render() {
    return (
      <div className="waiting">
        {this.props.text || this.messages[Math.floor(Math.random() * this.messages.length)] }
        ...
      </div>
    );
  }
}
