import React from "react";
import classes from "./Card.module.css";
import LogoSample from "../../assets/company-logo-sample.png";
import JobTag from "../JobTag";
import ApplyIcon from "../../assets/icons/apply-icon.png";
import ResponsiveIcon from "../../assets/icons/responsive-icon.png";
import PromotedIcon from "../../assets/icons/promoted-icon.png";
function JobCard() {
  return (
    <div className={classes.Card}>
      <div className={classes.LogoHolder}>
        <img src={LogoSample} alt="Company" />
      </div>
      <div className={classes.DetailsHolder}>
        <h2 className={classes.JobTitle}>Backend Developer</h2>
        <span className={classes.SubTitle}>Careeyour</span>
        <span className={classes.SubTitle}>New Baneshowr, Kathmandu</span>
        <div className={classes.TagHolder}>
          <JobTag tag="Rs 1000 - Rs 20000" />
          <JobTag tag="Urgently hiring" />
          <JobTag tag="Remote" />
        </div>
        <div className={classes.FeatureHolder}>
          <img src={ApplyIcon} />
          <span>Easy Apply</span>
        </div>
        <div className={classes.FeatureHolder}>
          <img src={ResponsiveIcon} />
          <span>Responsive Employer</span>
        </div>
        <span className={classes.Description}>
          Business Service Executive Leeds £22,200 starting salary, up to £24k
          OTE Want to do the best work of your life? Make your mark at Europe's
          ....
        </span>
        <div>
          <img src={PromotedIcon} />
          <span className={classes.Description}>Promoted</span>
          <span className={classes.Time}>24 hour ago</span>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
