import React from 'react';
import classNames from 'classnames';

export default function(props) {

  return <div className="card-container">
    {this.props.cards}
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



// let values = [1, 2, 3, 5, 8, 13, "?"]
// let cards = value.map( val => {
//   return <PlanningCard value={val} />
// });

// <PlanningCardHolder cards={cards} />