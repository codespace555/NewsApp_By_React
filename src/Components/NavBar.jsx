import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import Category from "./Category";


export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <nav className="flex gap-x-5 h-14 border-1 px-5  py-2 bg-green-900 rounded-b-sm text-yellow-100 w-[100%] justify-between md:justify-normal fixed top-0 z-50">
    <div className=" font-bold text-2xl mr-10">
          <a href="#">NewsFunda</a>
        </div>
      <button className="border-transparent text-[20px] cursor-pointer md:hidden block absolute z-20 right-5" onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? <Hamburger toggled={isOpen} toggle={setOpen} direction="left"  /> : <Hamburger toggled={isOpen} toggle={setOpen} direction="left" /> }
      </button>
      <ul className={`${navbarOpen ? '' : 'hidden'} md:flex gap-5 justify-center items-center   transition duration-150 ease-out hover:ease-in bg-green-700 h-[500px] md:h-10 md:bg-transparent absolute md:static z-10 w-full md:w-full left-0 top-0 text-center py-2 `}>
          <li className="md:border-none border-y-2 py-2">
            <NavLink to="" onClick = { () => {setNavbarOpen(false) ,setOpen(false)}}>Home</NavLink>
          </li>{" "}
          <li className="md:border-none border-b-2 py-2">
            <a href="#">About</a>
          </li>
          <li>
          <Category click= "{setNavbarOpen(false) ,setOpen(false)}"/>
          </li>
        </ul>
        </nav>
    </>
  );
}
