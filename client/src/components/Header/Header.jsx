import React from "react";
import "./index.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="headerIcon" />
      </IconButton>
      <img
        className="headerLogo"
        src="https://www.logolynx.com/images/logolynx/c3/c33509b095f8c5cdf543b085b1855077.png"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="forumIcon" />
      </IconButton>
    </div>
  );
}

export default Header;
