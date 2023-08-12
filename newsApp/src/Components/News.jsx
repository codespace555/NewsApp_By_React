import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles:[],
      DataLoad: false,
    };
  }
 async componentDidMount() {
    const apikey = "a4fb3530c246497ba9f46d8b77c2c647";
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`)
    let res = await data.json()
    this.setState({articles:res.articles})
    console.log("res", res);
      
  }
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
    if (this.DataisLoaded) return <div>
    <div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div> </div> ;
    return (
      <>
        <div className="w-screen ">
          <h1 className="text-left pl-5 m-2 font-bold text-3xl ">
           NewsFunda-{day()} Top Headlines {" "}
             <span className=" text-right text-[10px]">
              {new Date().getDate()}/{new Date().getMonth()}/
              {new Date().getFullYear()}
            </span>
          </h1>

          <div className="flex h-auto w-screen align-middle justify-center py-2 flex-wrap ">
            {this.state.articles.map((element) => {
              return (
                element.urlToImage?
                <NewsItem
                  key={element.url}
                  title={element.title?element.title.slice(0, 88):"Not Available"}
                  discription={element.description?element.description:"Not Available"}
                  imgsrc={element.urlToImage}
                  author={element.author?element.author:"Not Available"}
                  readmoreUrl={element.url}
                />:""
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
