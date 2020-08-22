import React, { useState } from "react";
import "./App.css";
import { detectClap, Recording } from "./helper functions/detectClap";
import Bob from "./components/Bob/Bob";

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

      setBobWigglePos((prevState) => !prevState);
    }
  });

  const [bobWigglePos, setBobWigglePos] = useState(true);

  return (
    <div className="App">
      <Bob wigglePos={bobWigglePos} />
    </div>
  );
};

export default App;
