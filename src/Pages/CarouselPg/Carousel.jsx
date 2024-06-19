import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [angle, setAngle] = useState(0);

  const gallerySpin = (sign) => {
    if (!sign) {
      setAngle(angle + 45);
    } else {
      setAngle(angle - 45);
    }
  };

  return (
    <div id="carousel">
      <figure
        id="spinner"
        style={{
          transform: `rotateY(${angle}deg)`,
          WebkitTransform: `rotateY(${angle}deg)`,
          MozTransform: `rotateY(${angle}deg)`,
        }}
      >
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" alt="Wanaka Tree" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/still-lake.jpg" alt="Still Lake" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pink-milford-sound.jpg" alt="Pink Milford Sound" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/paradise.jpg" alt="Paradise" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/morekai.jpg" alt="Morekai" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/milky-blue-lagoon.jpg" alt="Milky Blue Lagoon" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/lake-tekapo.jpg" alt="Lake Tekapo" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/milford-sound.jpg" alt="Milford Sound" />
      </figure>
      <span style={{ float: 'left' }} className="ss-icon" onClick={() => gallerySpin('-')}>&lt;</span>
      <span style={{ float: 'right' }} className="ss-icon" onClick={() => gallerySpin('')}>&gt;</span>
    </div>
  );
};

export default Carousel;
