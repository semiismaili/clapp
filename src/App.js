import React, { useState } from "react";
import "./App.css";
import { detectClap, Recording } from "./helper functions/detectClap";
import Bob from "./components/Bob/Bob";

const App = () => {
  Recording(function (data) {
    if (detectClap(data)) {
      console.log("clap!");

      //pick three random RGB values for the background color
      const rVal = Math.random() * 255;
      const gVal = Math.random() * 255;
      const bVal = Math.random() * 255;

      document.bgColor = "rgb(" + rVal + "," + gVal + "," + bVal + ")";

      //make Bob's color the inverted color of the background for a more epileptic experience
      setBobColor(
        "rgb(" + (255 - rVal) + "," + (255 - gVal) + "," + (255 - bVal) + ")"
      );

      //make bob move head to the other position wiht each clap
      setBobMoveHead((prevState) => !prevState);
    }
  });

  const [bobMoveHead, setBobMoveHead] = useState(true);
  const [bobColor, setBobColor] = useState("rgb(0,0,0)");

  return (
    <div className="App">
      <Bob
        moveHead={bobMoveHead}
        crossLegs={Math.random() >= 0.5}
        color={bobColor}
      />
    </div>
  );
};

export default App;
