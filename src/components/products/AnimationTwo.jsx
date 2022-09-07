import React from "react";
import "./AnimationTwo.css"

const AnimationTwo = () => {
  return (
    <div>
      <div class="scene scene--hero">
        <div class="cube cube--hero is-spinning">
          <div class="cube__face cube__face--front">Jollof Rice</div>
          <div class="cube__face cube__face--right">Gallo Pinto</div>
          <div class="cube__face cube__face--back">Masala Dosa</div>
          <div class="cube__face cube__face--left">Salad</div>
          <div class="cube__face cube__face--top">Fried Rice</div>
          <div class="cube__face cube__face--bottom">Plantain..</div>
        </div>
      </div>
    </div>
  );
};

export default AnimationTwo;
