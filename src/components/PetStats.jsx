import React from 'react';
import PropTypes from 'prop-types';

function PetStats(props) {
  return(
    <div>
      <h1>{props.tamagotchi.name}</h1>
      <p>Age: {props.tamagotchi.age}</p>
      <p>Weight: {props.tamagotchi.weight}</p>
      <p>Hunger: {props.tamagotchi.hunger}</p>
      <p>Happiness: {props.tamagotchi.happiness}</p>
      <p>Energy: {props.tamagotchi.energy}</p>
    </div>
  );
}
PetStats.propTypes = {
  tamagotchi: PropTypes.object
};

export default PetStats;
