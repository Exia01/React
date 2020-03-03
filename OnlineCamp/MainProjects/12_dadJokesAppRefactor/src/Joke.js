import React, { Component } from 'react';
import './Joke.css';
import { getColor, getEmoji } from './utils';

const Joke = props => {
  const borderColorStyle = getColor(props.votes);
  const emoji = getEmoji(props.votes);
  return (
    <div className='Joke'>
      <div className='Joke-buttons'>
        <i className='fas fa-arrow-up' onClick={props.upvote} />
        <span className='Joke-votes' style={{ borderColor: borderColorStyle }}>
          {props.votes}
        </span>
        <i className='fas fa-arrow-down' onClick={props.downvote} />
      </div>
      <div className='Joke-text'>{props.text}</div>
      <div className='Joke-smiley'>
        <i className={emoji} />
      </div>
    </div>
  );
};

export default Joke;
