import React from 'react';
import PropTypes from 'prop-types';

function InteractiveButtons(props) {
  let sleepButtonText = null;
  if(props.tamagotchi.sleeping === true && props.tamagotchi.alive === true) {
    sleepButtonText = <button onClick={props.onSleep}>Wake Up</button>;
  } else if(props.tamagotchi.sleeping === false && props.tamagotchi.alive === true) {
    sleepButtonText = <button onClick={props.onSleep}>Take A Nap</button>;
  } else {
    sleepButtonText = <button onClick={props.onReset}>Reset</button>;
  }
  return(
    <div>
      <button onClick={props.onFeed}>Feed</button>
      <button onClick={props.onPlay}>Play</button>
      {sleepButtonText}

    </div>
  );
}

InteractiveButtons.propTypes = {
  onFeed: PropTypes.func,
  onPlay: PropTypes.func,
  onSleep: PropTypes.func,
  onReset: PropTypes.func,
  tamagotchi: PropTypes.object
};

export default InteractiveButtons;
