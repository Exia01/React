import React from 'react';
import './Joke.css';
import { getColor, getEmoji } from '../utils';

const Joke = props => {
  // could create as arrow func handlers as well
  const borderColorStyle = getColor(props.votes);
  const emoji = getEmoji(props.votes);

  // Will make it work with hooks at some point
  // const handleUpVoteClick = () => {
  //   props.upVote(props.id, 1)
  // };
  return (
    <div className='Joke'>
      <div className='Joke-buttons'>
        <i className='fas fa-arrow-up' onClick={props.upVote} />
        <span className='Joke-votes' style={{ borderColor: borderColorStyle }}>
          {props.votes}
        </span>
        <i className='fas fa-arrow-down' onClick={props.downvote} />
      </div>
      <div className='Joke-text'>
        <p>{props.text}</p>
      </div>
      <div className='Joke-smiley'>
        <i className={emoji} />
      </div>
    </div>
  );
};

export default Joke;
