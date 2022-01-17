import React from "react";
import classes from "./FilterMobile.module.css";
import ArrowDown from "../../assets/icons/arrowdown.png";
import ArrowDownWhite from "../../assets/icons/arrowdownwhite.png";
function FilterMobile(props) {
  const image = props.active ? ArrowDownWhite : ArrowDown;
  return (
    <div
      className={
        props.active
          ? `${classes.FilterMobile} ${classes.Active}`
          : classes.FilterMobile
      }
    >
      {props.children}
      <img src={image} />
    </div>
  );
}

export default FilterMobile;
