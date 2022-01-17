import React, { useState } from "react";
import classes from "./CheckBox.module.css";
import Checked from "../../assets/icons/checked.png";
import Uncheked from "../../assets/icons/unchecked.png";
function CheckBox({ style, isChecked, label, ...props }) {
  const [checked, setChecked] = useState(isChecked ? true : false);
  const image = checked ? Checked : Uncheked;
  return (
    <div className={classes.CheckBoxDiv} onClick={() => setChecked(!checked)}>
      <img src={image} />
      {label && <span className={classes.Label}>{label}</span>}
    </div>
  );
}

export default CheckBox;
