import React from "react";

// Components
import SimpleSlider from "./Components/SimpleSlider/SimpleSlider";

// Styles
import Style from "./App.module.css";

const App = () => {
  return (
    <div className={Style.appContainer}>
      <div className={Style.slider}>
        <SimpleSlider
          breakPoints={{
            768: { slidesPerView: 1, gap: 30 },
            480: { slidesPerView: 1, gap: 10 },
            1024: { slidesPerView: 1, gap: 60 },
            576: { slidesPerView: 1, gap: 20 },
          }}
          slidesPerView={3}
          gap={11}
          pagination={true}
          stopOnLastSlide={true}
        >
          <div className={Style.slide}>1</div>
          <div className={Style.slide}>2</div>
          <div className={Style.slide}>3</div>
          <div className={Style.slide}>4</div>
        </SimpleSlider>
      </div>
    </div>
  );
};

export default App;
