import React, { useState } from "react";
import SelectedImg from "../../assets/icons/selected.png";
import NotSelectedImg from "../../assets/icons/not-selected.png";
import classes from "./Radio.module.css";
function Radio(props) {
  const options = [
    {
      name: "Any Time",
      value: "any",
    },
    {
      name: "Last 4 hours",
      value: "last4",
    },
    {
      name: "Last 7 days",
      value: "last7",
    },
    {
      name: "Last 14 days",
      value: "last14",
    },
    {
      name: "Last 28 days",
      value: "last28",
    },
  ];
  const [selected, setSelected] = useState(options[0].value);
  return (
    <div className={props.style}>
      {options.map((option, i) => {
        return (
          <div
            className={classes.RadioButton}
            onClick={() => setSelected(option.value)}
          >
            {option.value == selected ? (
              <img src={SelectedImg} />
            ) : (
              <img src={NotSelectedImg} />
            )}
            <label>{option.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Radio;
