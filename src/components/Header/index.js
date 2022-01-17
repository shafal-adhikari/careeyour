import React from "react";
import classes from "./Header.module.css";
import Input from "../../components/Input";
import SearchIcon from "../../assets/icons/search-icon.png";
import LocationIcon from "../../assets/icons/location-icon.png";
import Button from "../Button";

function Header() {
  return (
    <div className={classes.Header}>
      <Input
        type="text"
        icon={SearchIcon}
        placeholder="Job title, Company, keyword"
        className={classes.SearchInput}
      ></Input>
      {window.outerWidth > 700 && (
        <>
          <Input
            type="text"
            icon={LocationIcon}
            placeholder="City, district, chowk"
          ></Input>
          <Input
            type="text"
            icon={SearchIcon}
            placeholder="Job title, Company, keyword"
          ></Input>
          <Button className="hello" placeholder="safda">
            Search Jobs
          </Button>
        </>
      )}
    </div>
  );
}

export default Header;
