import React, { useEffect } from "react";

// Components
import Slider from "./Slider";

// Styles
import Style from "./SimpleSlider.module.css";

const SimpleSlider = () => {
  const slider = new Slider({
    675: { slidesPerView: 1, gap: 0 },
    1024: { slidesPerView: 4, gap: 40 },
    768: { slidesPerView: 3, gap: 10 },
  });

  console.log(slider.getSliderLayout());

  return <div className={Style.slider}></div>;
};

export default SimpleSlider;
