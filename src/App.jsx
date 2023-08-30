import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News  from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import Category from "./Components/Category";
export default class App extends Component {
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({ progress:progress});
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="h-auto bg-light-white overflow-hidden">
            <NavBar />
           
            
            <LoadingBar
              color="#f11946"
              height={5}
              progress={this.state.progress}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={<News setProgress={this.setProgress} key="general" pageSize="8" category="general" />}
              ></Route>
              <Route
                exact
                path="/business"
                element={
                  <News setProgress={this.setProgress} key="business" pageSize="8" category="business" />
                }
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <News setProgress={this.setProgress}
                    key="entertainment"
                    pageSize="8"
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={<News setProgress={this.setProgress} key="health" pageSize="70" category="health" />}
              ></Route>
              <Route
                exact
                path="/science"
                element={<News setProgress={this.setProgress} key="science" pageSize="8" category="science" />}
              ></Route>
              <Route
                exact
                path="/sports"
                element={<News setProgress={this.setProgress} key="sports" pageSize="70" category="sports" />}
              ></Route>
              <Route
                exact
                path="/technology"
                element={
                  <News setProgress={this.setProgress} key="technology" pageSize="8" category="technology" />
                }
              ></Route>
              <Route
                exact
                path="/general"
                element={<News setProgress={this.setProgress} key="general" pageSize="8" category="general" />}
              ></Route>
            </Routes>
            {/* <Footersec /> */}
          </div>
        </BrowserRouter>
      </>
    );
  }
}
