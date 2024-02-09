import React from "react";
import NavBar from "./components/navbar";
import Home from "./components/Home";


const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <div className="flex justify-center items-center min-h-screen"></div>
    </div>
  );
};

export default App;
