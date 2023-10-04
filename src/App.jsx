import React from "react";
import "./App.css";
import { Demo, Hero } from "./components";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </div>
    </main>
  );
};

export default App;
