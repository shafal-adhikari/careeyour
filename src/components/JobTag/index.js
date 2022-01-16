import React from "react";
import classes from "./JobTag.module.css";
function JobTag({ tag }) {
  return <div className={classes.JobTag}>{tag}</div>;
}

export default JobTag;
