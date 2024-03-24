import React, { Component } from "react";
import NewsCrd from "./NewsCrd";
// import { json } from "react-router-dom";

export default class NewsBody extends Component {
  constructor() {
    super();
    this.state = { articles: [], page: 1,category:"sports" };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=ed9779fdef0744698a7eaa3c3c4aa39a&page=${this.state.page}`;
    let jsonData = await fetch(url);
    let jsonArray = await jsonData.json();
    this.setState({ articles: jsonArray.articles });
    // console.log(this.state.page);
  }

  OnPrevioud = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=ed9779fdef0744698a7eaa3c3c4aa39a&page=${this.state.page - 1}`;
    let jsonData = await fetch(url);
    let jsonArray = await jsonData.json();
    this.setState({ articles: jsonArray.articles, page: this.state.page - 1 });
    //  this.setState({})
    console.log(this.state.page + 1);
  };
  OnNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=ed9779fdef0744698a7eaa3c3c4aa39a&page=${
      this.state.page + 1
    }`;
    let jsonData = await fetch(url);
    let jsonArray = await jsonData.json();
    this.setState({ articles: jsonArray.articles, page: this.state.page + 1 });
    //  this.setState({})
    console.log(this.state.page + 1);
  };
  render() {
    return (
      <>
        <div className="card-group">
          {this.state.articles.map((element) => (
            <NewsCrd
              url={element.url}
              description={element.description}
              urlToImage={element.urlToImage}
            />
          ))}
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary position-absolute mx-4 start-0"
            type="button"
            onClick={this.OnPrevioud}
          >
            Previous
          </button>
          <button
            className="btn btn-primary position-absolute mx-4 end-0"
            type="button"
            onClick={this.OnNext}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
