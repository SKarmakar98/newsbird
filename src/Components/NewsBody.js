import React, { Component } from "react";
import NewsCrd from "./NewsCrd";
// import { json } from "react-router-dom";

export default class NewsBody extends Component {
  constructor() {
    super();
    this.state = { _articles: [] };
  }
  async componentDidMount() {
    let url =
"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ed9779fdef0744698a7eaa3c3c4aa39a"
    let jsonData = await fetch(url);
    let jsonArray = await jsonData.json();
    console.log(jsonArray);
    this.setState({ _articles: jsonArray.articles });
  }
  render() {
    return (
      <div className="card-group">
          {this.state._articles.map((element, index) => (
            <NewsCrd
              url={element.url}
              description={element.description}
              urlToImage={element.urlToImage}
            />
          ))}
        </div>
    );
  }
}
