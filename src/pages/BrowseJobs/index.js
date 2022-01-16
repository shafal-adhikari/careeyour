import React, { useEffect } from "react";
import classes from "./BrowseJobs.module.css";
import seo from "../../helpers/seo";
import JobCard from "../../components/Card/JobCard";
import FilterCard from "../../components/FilterCard";
import CheckBox from "../../components/CheckBox/CheckBox";
import Radio from "../../components/Radio";
import FilterIcon from "../../assets/icons/filter-icon.png";
import JobAlertCard from "../../components/JobAlertCard";
function BrowseJobs() {
  useEffect(() => {
    seo({
      title: "Browse Jobs",
      description: "Browse Jobs through this portal.",
    });
  }, []);
  return (
    <div className={classes.BrowseJobs}>
      <div className={classes.FilterBox}>
        <div className={classes.FilterBoxHeading}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={FilterIcon} />
            <span className={classes.FilterSpan}>Filters</span>
          </div>
          <span className={classes.FilterSpan}>Reset</span>
        </div>
        <FilterCard>
          <span className={classes.FilterHeading}>Listed Date</span>
          <Radio style={classes.FilterCheckBox} />
          <div className={classes.Line}></div>
          <span className={classes.FilterHeading}>Job Type</span>
          <div className={classes.FilterCheckBox}>
            <CheckBox label="Full time" />
            <CheckBox label="Part time" />
            <CheckBox label="Internship" />
            <CheckBox label="Entry level" />
            <CheckBox label="Mid level" />
            <CheckBox label="Senior level" />
          </div>
        </FilterCard>
      </div>
      <div className={classes.JobBox}>
        <div className={classes.JobBoxHeading}>
          <span className={classes.FilterSpan}>412 Jobs - Page 1 of 14</span>
        </div>
        <div className={classes.JobListBox}>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
          <JobCard></JobCard>
        </div>
      </div>
      <div className={classes.JobAlertBox}>
        <JobAlertCard />
      </div>
    </div>
  );
}

export default BrowseJobs;
