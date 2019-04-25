import React from 'react';

function DynamicImage() {
  return(
    <div>
      <style jsx>{`
        img {
          height: 10vh;
        }
            `}</style>
      <img src={require(`../assets/img/happy.png`)} />
    </div>
  );
}

export default DynamicImage;
