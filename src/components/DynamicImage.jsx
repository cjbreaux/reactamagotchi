import React from 'react';
import PropTypes from 'prop-types';

function DynamicImage(props) {
  return(
    <div>
      <style jsx>{`
        img {
          height: 10vh;
        }
            `}</style>
      <img src={require(`../assets/img/${props.tamagotchi.mood}.png`)} />
    </div>
  );
}
DynamicImage.propTypes = {
  tamagotchi: PropTypes.object
};

export default DynamicImage;
