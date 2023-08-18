import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      DataLoad: false,
      page: 1,
      apikey: "a4fb3530c246497ba9f46d8b77c2c647",
    };
  }

  async componentDidMount() {
    this.setState({ DataLoad: true });
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=1&pageSize=${this.props.pageSize}`
    );
    let res = await data.json();
    this.setState({
      articles: res.articles,
      totalnews: res.totalResults,
      DataLoad: false,
    });
  }

  handelNextClick = async () => {
    this.setState({ DataLoad: true });
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.state.apikey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`
    );
    let res = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: res.articles,
      DataLoad: false,
    });
    console.log("polu");
  };
  handelPreveClick = async () => {
    this.setState({ DataLoad: true });
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apiKey=${this.state.apikey}&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`
    );
    let res = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: res.articles,
      DataLoad: false,
    });
  };
  render() {
    function day() {
      const day = new Date().getDay(); //return 0 to 6
      let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday ",
        "Friday",
        "Saturday",
      ];
      return weekday[day];
    }

    return (
      <>
        <div className="  w-[100%] border-gray-700">
          <h1 className="text-center  m-2 font-bold text-3xl ">
            NewsFunda-{day()} Top Headlines{" "}
            <span className=" text-right text-[10px]">
              {new Date().getDate()}/{new Date().getMonth()}/
              {new Date().getFullYear()}
            </span>
          </h1>
          {this.state.DataLoad && <Loading />}
          <div className="flex h-auto   py-2 flex-wrap justify-center">
            {!this.state.DataLoad &&
              this.state.articles.map((element) => {
                return element.urlToImage ? (
                  <NewsItem
                    key={element.url}
                    title={
                      element.title
                        ? element.title.slice(0, 88)
                        : "Not Available"
                    }
                    discription={
                      element.description
                        ? element.description
                        : "Not Available"
                    }
                    imgsrc={element.urlToImage}
                    author={element.author ? element.author : "Not Available"}
                    readmoreUrl={element.url}
                    newsDate={element.publishedAt.slice(0, 10)}
                    source={element.source.name}


                  />
                ) : (
                  ""
                );
              })}
          </div>
          <div className="flex justify-between px-20">
            <button
              disabled={this.state.page <= 1}
              className="disabled:opacity-25 font-bold border-2 w-36 h-10 rounded-md mt-2 bg-green-700 text-white flex justify-around pt-2 align-middle hover:bg-green-900 delay-150 "
              onClick={this.handelPreveClick}
            >
              <span> &#x2190;</span> Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalnews / this.props.pageSize)
              }
              className="disabled:opacity-25 font-bold border-2 w-36 h-10 rounded-md mt-2 bg-green-700 text-white flex justify-around pt-2 align-middle hover:bg-green-900 delay-150 "
              onClick={this.handelNextClick}
            >
              Next <span>&#x2192;</span>{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}
