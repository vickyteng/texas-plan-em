import React from 'react';
import classNames from 'classnames';

export default function (props) {
  return (
    <div
      className={classNames('planning-card',
        {
          'planning-card--face-down': props.faceDown,
          'planning-card--selected': props.selected,
        })}
      data-value={props.faceDown ? '' : props.value}
      onClick={props.onclick}
    >
      {props.faceDown ? '' : props.value}
      {props.name
      && (
      <div className="planning-card__name">
        {props.name}
        </div>)
      }
    </div>);
}
