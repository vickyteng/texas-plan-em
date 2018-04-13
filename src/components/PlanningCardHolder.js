import React from 'react';
import Waiting from './Waiting';

export default function(props) {

  return <div className="card-container">
    {props.cards}
    <div className="card-overlay">
        {!props.submitted ? 
            <button className="button" disabled={!props.ready} onClick={props.onSubmitCard}>
                Ready
            </button>
        :
            !props.canFlipCards && <Waiting />
        }
        {props.canFlipCards && 
            <button className="button" disabled={!props.canFlipCards} onClick={props.onFlipCards}>
                Flip Cards
            </button>
        }
        {props.cardsUp &&
            <button className="button" onClick={props.resetGame}>
                Reset Game
            </button>
        }
    </div>
  </div>
}
