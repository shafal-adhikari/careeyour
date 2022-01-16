import React from "react";
import classes from "./FilterCard.module.css";
function FilterCard({ children }) {
  return <div className={classes.Card}>{children}</div>;
}

export default FilterCard;
