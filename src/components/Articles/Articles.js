import React from "react";
import "./Articles.css";

class Articles extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="allArticles">
        <div className="container">
          <div className="row">
            {this.props.data.map((item, index) => {
              return (
                <div className="col-sm-4" key={item.name + index}>
                  <h6 className="info">Posted by: {item.name}
                     | On: {item.date}</h6>
                  <img alt="" className="img-fluid" src={item.imgUrl}/>
                  <h3 className="headings">{item.heading}</h3>
                  <p className="news">{item.article}</p>
                  <button type="button" className="btn btn-secondary btn-sm">Read Article</button>
                </div>
              )
            })}
          </div>
        </div>
        {/* <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <h6 className="info">Posted by: {this.props.data.name} | On: {this.props.data.date}</h6>
          <img alt="" className="img-fluid" src={this.props.data.imgUrl}/>
          <h3 className="headings">{this.props.data.heading}</h3>
          <p classname="news">{this.props.data.article}</p>
          <button type="button" class="btn btn-secondary btn-sm">Read Article</button>
        </div>
      </div>
    </div> */}

      </div>
    )
  }
}
export default Articles;
