import React from "react";
import classes from "./Bob.module.scss";

const Bob = (props) => {
  const moveHead = props.moveHead;
  const crossLegs = props.crossLegs;
  const color = props.color;
  return (
    <div className={classes.Bob} style={{ color: color }}>
      ☻{moveHead ? " " : ""}/ <br />
      /▌ <br />
      {crossLegs ? "/ \\ " : "X"} <br />
    </div>
  );
};

export default Bob;
