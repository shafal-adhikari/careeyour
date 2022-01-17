import React, { useEffect } from "react";
import Logo from "../../assets/logo.svg";
import LogoSmall from "../../assets/logo-mobile.png";
import classes from "./Navbar.module.css";
import BurgerIcon from "../../assets/icons/burgericon.png";
function Navbar() {
  return (
    <div className={classes.Navbar}>
      <ul className={classes.LinkList}>
        <img
          src={window.outerWidth > 700 ? Logo : LogoSmall}
          alt="Careeyour"
          className={classes.Logo}
        />
        <div className={classes.LinkListText}>
          <li className={classes.Link}>Browse Jobs</li>
          <li className={classes.Link}>Career Advice</li>
        </div>
      </ul>
      <ul className={classes.LinkList}>
        {window.outerWidth > 700 && (
          <li className={classes.LightLink}>Upload your CV</li>
        )}
        <li className={classes.LightLink + " " + classes.Highlight}>Sign in</li>
        {window.outerWidth > 700 && (
          <li className={classes.LightLink}>Post a job</li>
        )}
        <img src={BurgerIcon} className={classes.BurgerIcon} />
      </ul>
    </div>
  );
}

export default Navbar;
