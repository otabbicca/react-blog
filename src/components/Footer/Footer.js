import React from "react";
import "./Footer.css";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="footer">
        <h3>Women helping women</h3>
        <h4>Home </h4>.<h4> Stories </h4>.<h4> Podcast </h4>.<h4> Contact</h4>
        <p>
          {this.props.slinks.map((item, index) => {
            return(
              <a href={item.url} key={item.iconName}>
                <FontAwesome className="fa" name={item.iconName} />
              </a>
            )
          })}
          {/* <FontAwesome className="fa" name="university"/>
          <FontAwesome className="fa" name="rss"/>
          <FontAwesome className="fa" name="wordpress"/>
          <FontAwesome className="fa" name="google-plus"/> */}
        </p>
        <h6>Each1Reach1 Inc. Copyright:2015.</h6>
      </div>
    )
  }
}
export default Footer;

// {this.props.links.map((item, index) => {
//   return(
//   <a className="nav-item nav-link" href={item.local + index} key={item.name + index}>{item.name}</a>
//   )
// })}
