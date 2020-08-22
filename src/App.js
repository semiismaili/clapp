import React, { useState } from "react";
import "./App.css";
import { detectClap, Recording } from "./helper functions/detectClap";

const App = () => {
  Recording(function (data) {
    if (detectClap(data)) {
      console.log("clap!");
      document.bgColor =
        "rgb(" +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        ")";
    }
  });

  return <div className="App">aa</div>;
};

export default App;
