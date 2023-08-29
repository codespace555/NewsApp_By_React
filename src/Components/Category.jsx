import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Category extends Component {
  render() {
    return (
      <div className='bg-green-700 h-auto w-[100%] py-5 rounded-b-full px-10'>
        <ul className='flex justify-center font-semibold gap-x-12 gap-y-7 flex-wrap text-yellow-100 md:text-xl text-[0.5rem]'>
        <li><NavLink to="/general">General</NavLink></li>
              <li><NavLink to="/business">Business</NavLink></li>
              <li><NavLink to="/entertainment">Entertainment</NavLink></li>
              <li><NavLink to="/health">Health</NavLink></li>
              <li><NavLink to="/science">Science</NavLink></li>
              <li><NavLink to="/sports">Sports</NavLink></li>
              <li><NavLink to="/technology">Technology</NavLink></li>
        </ul>
      </div>
    )
  }
}
