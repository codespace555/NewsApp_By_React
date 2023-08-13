import React, { Component } from "react";

export default class Footersec extends Component {
  render() {
  
    return (
      <>
        <footer className="footer bg-green-900 h-[200px]  w-screen mt-10">
          <div className="start text-white flex justify-between px-10 py-4">
            <div className="connect  text-center text-2xl">
              <h1 className="underline mb-1">Connect With Us</h1>
<div className="flex gap-5 mt-5">
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              </div>
            </div>
            <div className="flex justify-evenly flex-col text-sm">
              <h1  className="underline">Category</h1>
              <div className="text-md flex gap-x-2">
              <span>General</span>
              <span>Business</span>
              <span>Entertainment</span>
              <span>Health</span>
              <span>Science</span>
              <span>sports</span>
              <span>technology</span>
              </div>
            </div>

<div>
  
</div>


          </div>

          <div className="footerend">
            <p className="text-center bg-slate-900 p-4 text-white w-screen  ">
              Copyright © 2021. All rights reserved.
            </p>
          </div>
        </footer>
      </>
    );
  }
}
