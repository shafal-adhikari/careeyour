import React from "react";
import Logo from "../../assets/logo.svg";
import classes from "./Navbar.module.css";
function index() {
  return (
    <div className={classes.Navbar}>
      <ul className={classes.LinkList}>
        <img src={Logo} alt="Careeyour" className={classes.Logo} />
        <div className={classes.LinkListText}>
          <li className={classes.Link}>Browse Jobs</li>
          <li className={classes.Link}>Career Advice</li>
        </div>
      </ul>
      <ul className={classes.LinkList}>
        <li className={classes.LightLink}>Upload your CV</li>
        <li className={classes.LightLink + " " + classes.Highlight}>Sign in</li>
        <li className={classes.LightLink}>Post a job</li>
      </ul>
    </div>
  );
}

export default index;
