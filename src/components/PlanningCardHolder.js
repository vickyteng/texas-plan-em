import React from 'react';
import Waiting from './Waiting';

export default function (props) {
  return (
    <div className="card-container">
      { props.role === 'Participant'
      && props.cards
    }
      <div className="card-overlay">
        {!props.submitted
          ? null // <Waiting text="Kindly submit a card." />
          : !props.canFlipCards && <Waiting />
        }
        {props.canFlipCards && !props.cardsUp && (
        <button type="button" className="button" disabled={!props.canFlipCards} onClick={props.onFlipCards}>
                Flip Cards
        </button>)
        }
        {props.canFlipCards && props.cardsUp && (
        <button type="button" className="button" onClick={props.resetGame}>
                Reset Game
          </button>)
        }
      </div>
    </div>);
}
