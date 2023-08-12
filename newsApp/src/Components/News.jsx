import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles:[],
      DataLoad: false,
      page:1,
      apikey:"a4fb3530c246497ba9f46d8b77c2c647"
    };
  }


 async componentDidMount() {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.state.apikey}&page=1&pageSize=20`)
    let res = await data.json()
    this.setState({articles:res.articles , totalnews:res.totalResults})
   
  }
   
  handelNextClick = async() => {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.state.apikey}&page=${this.state.page + 1}&pageSize=20`)
    let res = await data.json()
    this.setState({
      page:this.state.page+1,
      articles:res.articles
    })
     console.log("polu")
  }
  handelPreveClick= async() => {
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.state.apikey}&page=${this.state.page - 1}&pageSize=20`)
    let res = await data.json()
    this.setState({
      page:this.state.page-1,
      articles:res.articles
    })
    
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
        <div className="w-screen h-auto p-0 ">
          <h1 className="text-left  m-2 font-bold text-3xl ">
           NewsFunda-{day()} Top Headlines {" "}
             <span className=" text-right text-[10px]">
              {new Date().getDate()}/{new Date().getMonth()}/
              {new Date().getFullYear()}
            </span>
          </h1>

          <div className="flex h-auto w-screen align-middle justify-center py-2 flex-wrap pr-10 ">
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
          <div className="flex justify-between px-20">
            <button disabled = {this.state.page <= 1}  className=' font-bold border-2 w-36 h-10 rounded-md mt-2 bg-green-700 text-white flex justify-around pt-2 align-middle hover:bg-green-900 delay-150 'onClick={this.handelPreveClick}>  <span> &#x2190;</span>  Previous</button>
            <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalnews/20)}  className=' font-bold border-2 w-36 h-10 rounded-md mt-2 bg-green-700 text-white flex justify-around pt-2 align-middle hover:bg-green-900 delay-150 ' onClick={this.handelNextClick}>Next <span>&#x2192;</span> </button>
          </div>
        </div>
      </>
    );
  }
}
