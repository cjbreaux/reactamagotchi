import React from 'react';
import PropTypes from 'prop-types';

function InteractiveButtons(props) {
  let sleepButtonText = null;
  if(props.tamagotchi.sleeping === true && props.tamagotchi.alive === true) {
    sleepButtonText = 'Wake Up';
  } else if(props.tamagotchi.sleeping === false && props.tamagotchi.alive === true) {
    sleepButtonText = 'Take A Nap';
  } else {
    sleepButtonText = 'RIP';
  }
  return(
    <div>
      <button onClick={props.onFeed}>Feed</button>
      <button onClick={props.onPlay}>Play</button>
      <button onClick={props.onSleep}>{sleepButtonText}</button>
    </div>
  );
}

InteractiveButtons.propTypes = {
  onFeed: PropTypes.func,
  onPlay: PropTypes.func,
  onSleep: PropTypes.func,
  tamagotchi: PropTypes.object
};

export default InteractiveButtons;
