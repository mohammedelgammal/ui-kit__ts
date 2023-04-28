import React, { useEffect, useState } from "react";

// Components
import Slider from "./Slider";

// Types
import { SliderLayout, SliderProps } from "../interfaces";

// Styles
import Style from "./SimpleSlider.module.css";

const SimpleSlider: React.FC<SliderProps> = ({
  breakPoints,
  slidesPerView,
  gap,
  pagination,
  stopOnLastSlide,
  children,
}) => {
  // Instantiate Slider
  const slider = new Slider(
    breakPoints,
    slidesPerView,
    gap,
    React.Children.count(children),
    stopOnLastSlide
  );

  const [sliderLayout, setSliderLayout] = useState<SliderLayout>();

  const updateSliderLayout = () => {
    const newSliderLayout = slider.getSliderLayout();
    setSliderLayout(newSliderLayout);
  };

  useEffect(() => {
    updateSliderLayout();
    console.log("slides count", slider.slidesCount);
    console.log("slidesPerView", slider.slidesPerView);
    console.log("currentSlide", slider.currentSlide);
    console.log("gap", slider.gap);
    console.log("-------------");
    window.addEventListener("resize", updateSliderLayout);
    return () => window.removeEventListener("resize", updateSliderLayout);
  }, []);

  return (
    <div
      className={Style.sliderContainer}
      style={{
        gap: `${sliderLayout?.gap}px`,
      }}
      onClick={(e) => {
        slider.nextSlide();
        console.log("slides count", slider.slidesCount);
        console.log("slidesPerView", slider.slidesPerView);
        console.log("currentSlide", slider.currentSlide);
      }}
    >
      {pagination && children}
    </div>
  );
};

export default SimpleSlider;
