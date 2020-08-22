import React from "react";
import classes from "./Bob.module.scss";

const Bob = (props) => {
  console.log(props.wigglePos);
  const wigglePos = props.wigglePos;
  return (
    <div className={classes.Bob}>
      ☻{wigglePos ? " " : ""}/ <br />
      /▌ <br />
      /\ <br />
    </div>
  );
};

export default Bob;
