import React from 'react';
import PropTypes from 'prop-types';

function PetView(props) {
  return(
    <div>
      <h1>this is the petview</h1>
      <p>Age: {props.petInfo[0].age}</p>
      <p>Weight: {props.petInfo[0].weight}</p>
      <p>Hunger: {props.petInfo[0].hunger}</p>
      <p>Happiness: {props.petInfo[0].happiness}</p>
    </div>
  );
}
PetView.propTypes = {
  petInfo: PropTypes.array,
}

export default PetView;
