import React from "react";
import "./App.scss";
import Menubar from "./components/menubar/Menubar";

function App() {
  return (
    <div className="app">
      <div className="app__menu">
        <Menubar />
      </div>
      <div className="app__content" />
    </div>
  );
}

export default App;
