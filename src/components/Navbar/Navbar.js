import React from "react";
import "./Navbar.css";
import { Adinkra } from "react-adinkra"

class Navbar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Adinkra className="adikra2" name={'nkyinkyim'}/><a className="navbar-brand" href="https://www.google.com.gh/"> {this.props.brand}</a><Adinkra className="adikra2" name={'nkyinkyim'}/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              {this.props.links.map((item, index) => (
                <a className="nav-item nav-link" href={item.local + index} key={item.name + index}>{item.name}</a>
                )
              )}
            </div>
          </div>
      </nav>
    )
  }
}
export default Navbar;
