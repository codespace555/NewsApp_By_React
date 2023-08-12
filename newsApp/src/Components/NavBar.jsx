import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <>
      
<nav className="flex text-center gap-x-5 h-14 border-1 px-5 py-2 bg-green-900 rounded-b-lg text-yellow-100 w-max-[100%] ">
    <div className=" font-bold text-2xl"><a href="#">NewsFunda</a></div>
    <div className=" md:hidden  flex-col flex justify-center navbar-line ">
      <span className=' rounded-md w-10 h-2 bg-slate-900 mb-1'></span>
      <span className=' rounded-md w-10 h-2 bg-slate-900 mb-1'></span>
      <span className=' rounded-md w-10 h-2 bg-slate-900 mb-1'></span>
      
    </div>

    <ul className='md:flex hidden text-center pt-1 gap-x-5 text-xl'>
    <li><a href="#">Home</a></li>
    <li><a href="#">About us</a></li>
    </ul>
</nav>

      
      </>
    )
  }
}
