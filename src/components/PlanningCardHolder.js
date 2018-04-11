import React from 'react';
import classNames from 'classnames';

export default function(props) {

  return <div className="card-container">
    {props.cards}
    <div class="card-overlay">
        <button id="submit" disabled>
            Ready
        </button>
        <button id="flipper">
            Flip Cards
        </button>
    </div>
  </div>
}
