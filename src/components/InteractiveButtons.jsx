import React from 'react';

function InteractiveButtons(props) {
  return(
    <div>
      <button onClick={props.onUpdateWeight}>Feed</button>
      <button>Play</button>
      <button>Sleep</button>
    </div>
  );
}

export default InteractiveButtons;
