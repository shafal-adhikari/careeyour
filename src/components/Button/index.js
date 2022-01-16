import React from "react";
import classes from "./Button.module.css";
function Button({ className, children, ...rest }) {
  return (
    <button className={`${classes.Button} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
