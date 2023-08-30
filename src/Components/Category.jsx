import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Category({click}) {
  return (
    <>
         <div className=''>
        <ul className='md:flex gap-5'>
        <li className="md:border-none border-b-2 py-2"><NavLink to="/general">General</NavLink></li>
              <li className="md:border-none border-b-2 py-2"><NavLink to="/business" onClick={click}>Business</NavLink></li>

              <li className="md:border-none border-b-2 py-2"><NavLink to="/entertainment" onClick={click}>Entertainment</NavLink></li>

              <li className="md:border-none border-b-2 py-2"><NavLink to="/health" onClick={click}>Health</NavLink></li>

              <li className="md:border-none border-b-2 py-2"><NavLink to="/science" onClick={click}>Science</NavLink></li>

              <li className="md:border-none border-b-2 py-2"><NavLink to="/sports" onClick={click}>Sports</NavLink></li>
              
              <li className="md:border-none border-b-2 py-2"><NavLink to="/technology" onClick={click}>Technology</NavLink></li>
        </ul>
      </div>
    </>
  )
}

