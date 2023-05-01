import React from "react";

// Components
import SimpleSlider from "./Components/SimpleSlider/SimpleSlider";
import Button from "./Components/Button/Button";
import ThemeProvider from "./Components/ThemeProvider/ThemeProvider";

// Styles
// import Style from "./App.module.css";

const App = () => {
  return (
    <ThemeProvider>
      <SimpleSlider />
      <Button>Click me </Button>
    </ThemeProvider>
  );
};

export default App;
