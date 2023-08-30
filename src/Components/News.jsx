import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import Topbtn from "./TopBtn";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
    apikey: import.meta.env.VITE_API_KEY,
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  FirstletterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = { 
      articles: [],
      DataLoad: false,
      page: 1,
      totalnews: 0,
    };
    document.title = `${this.FirstletterUpperCase(
      this.props.category
    )} | NewsFunda`;
  }

  async updateData() {
    this.props.setProgress(10)
    this.setState({ DataLoad: true });
    this.props.setProgress(30)
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
   
    this.props.setProgress(50)
    let res = await data.json();
    this.setState({
      articles: res.articles,
      totalnews: res.totalResults,
      DataLoad: false,
    });
    this.props.setProgress(100)
  }

 async componentDidMount() {
     this.updateData();
  }
  fetchMoreData = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    );
    this.setState({page: this.state.page + 1})
    let res = await data.json();
    this.setState({
      articles: this.state.articles.concat(res.articles),
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
          <h1 className="text-center  mt-[100px] font-bold text-3xl ">
            NewsFunda-{day()} Top{" "}
            {`${this.FirstletterUpperCase(this.props.category)}`} Headlines
            <span className=" text-right text-[10px]">
              {" "}
              <br />
            </span>
          </h1>
          {this.state.DataLoad && <Loading />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalnews}
            loader={<Loading />}
          >
            <div className="flex h-auto py-2 flex-wrap justify-center">
              {!this.state.DataLoad &&this.state.articles.map((element,index) => {
                return (
                  <NewsItem
                    key={index}
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
                    imgsrc={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/1330788505/vector/news-paper-care-logo-template-design.jpg?s=612x612&w=0&k=20&c=c9loKIAmPQ06pPh07dJny2iNKEv4BMhMXPZx9AGf8VE=" }
                    author={element.author ? element.author : "Not Available"}
                    readmoreUrl={element.url}
                    newsDate={element.publishedAt.slice(0, 10)}
                    source={element.source.name}
                  />
                ) 
              })}
            </div>
          </InfiniteScroll>
<div className=" ml-5 fixed bottom-0 my-5 font-semibold bg-green-700 text-white p-2 rounded-md text-[0.5rem] opacity-[0.6]">
  Date - 
{new Date().getDate()}/{new Date().getMonth()}/
              {new Date().getFullYear()}
</div>
          <Topbtn/>
        </div>
      </>
    );
  }
}
