import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import Footersec from "./Components/Footersec";
export default class App extends Component {
  render() {
    return (
      <>
        <div className="h-auto bg-light-white w-screen ">
          <NavBar />
          <News />
          <Footersec />
        </div>
      </>
    );
  }
}
