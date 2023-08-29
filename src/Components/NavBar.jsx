import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class NavBar extends Component {
  
  render() {
    return (
      <>
      
<nav className="flex gap-x-5 h-14 border-1 px-5  py-2 bg-green-900 rounded-b-sm text-yellow-100 max-w-[100%] justify-between md:justify-normal">
    <div className=" font-bold text-2xl"><a href="#">NewsFunda</a></div>
    <ul className='flex  text-center pt-1 gap-x-5 md:text-xl'>
    <li><NavLink to="">Home</NavLink></li>
    <li><a href="#">About us</a></li>
    
    </ul>
   
</nav>

      
      </>
    )
  }
}
