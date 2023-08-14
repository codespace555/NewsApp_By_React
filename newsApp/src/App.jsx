import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import Footersec from "./Components/Footersec";
import Category from "./Components/Category";
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="h-auto bg-light-white " activeStyle={{ color:'#5754a8' }}>
            <NavBar />
            <Category />
            <Routes>
              <Route  exact path="/" element= {<News key="general" pageSize="10" category="general" />}></Route>
              <Route  exact path="/business" element= {<News  key="business" pageSize="10" category="business" />}></Route>
              <Route exact path="/entertainment" element= {<News  key="entertainment" pageSize="10" category="entertainment" />}></Route>
              <Route  exact path="/health" element= {<News key="health" pageSize="10" category="health" />}></Route>
              <Route  exact path="/science" element= {<News key="science" pageSize="10" category="science" />}></Route>
              <Route exact path="/sports" element= {<News  key="sports" pageSize="10" category="sports" />}></Route>
              <Route  exact path="/technology" element= {<News key="technology" pageSize="10" category="technology" />}></Route>
              <Route  exact path="/general" element= {<News key="general" pageSize="10" category="general" />}></Route>

            </Routes>
            <Footersec />
          </div>
        </BrowserRouter>
      </>
    );
  }
}
