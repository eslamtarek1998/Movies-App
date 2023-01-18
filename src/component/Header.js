import React from 'react'
import './Header.css'
import {Link ,NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className='container'>

          <div className='logo'>
            {/* <a href='/'>Movies</a> */}
            <Link to="/">Movies</Link>
            
            
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/">Watch List</NavLink>
              </li>
            <li>
              <NavLink to="/watched">Watched</NavLink>
              </li>
            <li>
              <NavLink to="/add" className='btn'>Add</NavLink>
              </li>
          </ul>
        </div>
      
    </div>
  ) 
}
