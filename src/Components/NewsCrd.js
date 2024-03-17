import React, { Component } from "react";
import NoImage from "../Components/NoImage.jpg"
export default class NewsCrd extends Component {


  // async componentDidMount(){
  //   let data =await fetch(url);
  //   let GetJson=await data.json();
  //   console.log(GetJson);
  // }
  render() {
    let {urlToImage,description,url}=this.props
    return (
      <div>
              <div className="card p-4 m-4" style={{ width: "18rem" }}>
                <img
                  src={urlToImage?urlToImage:NoImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{description?description.slice(0,40):"No Des Found"}...</h5>
                  <p className="card-text">
                    {/* Some quick example text to build on the card title and make
                    up the bulk of the card's content. */}
                  </p>
                  <a href={url?url:"No Url Found"} className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
        </div>
    );
  }
}
