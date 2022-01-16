import React from "react";
import classes from "./JobAlertCard.module.css";
import MailAlert from "../../assets/icons/mail-alert.png";
import CancelIcon from "../../assets/icons/cancel-icon.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
function JobAlertCard() {
  return (
    <div className={classes.Card}>
      <div className={classes.MailIconHolder}>
        <div className={classes.MailIcon}>
          <img src={MailAlert} />
          <span className={classes.MailHeading}>
            Discover new jobs for this search.
          </span>
        </div>
        <img src={CancelIcon} />
      </div>
      <span className={classes.MailSubHead}>
        3 million job seekers receive fresh jobs from Careeyour daily!
      </span>
      <Input
        type="text"
        placeholder="Enter your email"
        className={classes.Input}
      />
      <Button>Create a Job Alert</Button>
      <span className={classes.Description}>
        By creating an email alert, you agree to Careeyour's
        <span className="Highlight"> Terms of Service </span>
        and <span className="Highlight">Privacy Statement. </span>You can cancel
        email alerts at any time.
      </span>
    </div>
  );
}

export default JobAlertCard;
