import React from "react";
import "./Header.css";
import { Adinkra } from "react-adinkra"

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-background"></div>
      <div className="header">
        <h1>Afi's Blog Site</h1>
        <Adinkra className="adinkra" name={'epa'}/>
        <h3>Women helping women!</h3>
      </div>
    </div>
    )
  }
}
export default Header;
