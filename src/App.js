import "./styles.css";
import React from "react";
import Header from "./components/Header";
import CarouselComponent from "./components/CarouselComponent";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <Cards />
    </div>
  );
};

export default App;
