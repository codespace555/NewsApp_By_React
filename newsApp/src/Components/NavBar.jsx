import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <>
        <div>
<nav className="flex text-center gap-x-5 h-14 border-2 px-5 py-2 bg-green-900 rounded-b-lg text-yellow-100">
    <div className=" font-bold text-2xl"><a href="#">NewsFunda</a></div>
    <ul className='flex  text-center pt-1 gap-x-5 text-xl'>
    <li><a href="#">Home</a></li>
    <li><a href="#">About us</a></li>
    </ul>
</nav>

        </div>
      </>
    )
  }
}
