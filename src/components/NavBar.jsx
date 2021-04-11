import React from "react";
import MediaImpact from "../images/media-impact-logo.png";
import "../components/styles/NavBar.scss";
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img
          src={MediaImpact}
          alt="media impact"
          className="d-inline-block align-top"
        ></img>
      </nav>
    );
  }
}

export default NavBar;
