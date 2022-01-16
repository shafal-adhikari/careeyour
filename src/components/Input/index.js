import React from "react";
import classes from "./Input.module.css";

function index({ type, placeholder, className, children, icon, ...rest }) {
  return (
    <div className={`${className} ${classes.Input}`}>
      {icon && <img src={icon} alt="icon" className={classes.Icon} />}
      <input type={type} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default index;
