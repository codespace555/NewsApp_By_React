
import './App.css'
import React, { Component } from 'react'
import NavBar from './Components/NavBar'

export default class App extends Component {
  render() {
    return (
      <>
      <div className="h-screen bg-light-primary dark:bg-dark-primary">
     <NavBar />
      </div>
      </>
    )
  }
}

 