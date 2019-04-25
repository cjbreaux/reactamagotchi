import React from 'react';
import PropTypes from 'prop-types';

function InteractiveButtons(props) {
  return(
    <div>
      <button onClick={props.onUpdateStats}>Feed</button>
      <button>Play</button>
      <button>Sleep</button>
    </div>
  );
}

InteractiveButtons.propTypes = {
  onUpdateStats: PropTypes.func
};

export default InteractiveButtons;
