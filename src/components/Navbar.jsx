import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white text-black h-fit p-0 min-h-0 lg:flex lg:justify-between lg:h-[10vh] sm:flex-nowrap">
    <div className="navbar-start h-full lg:w-fit w-full">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-white rounded-box w-52">
          <li><Link to="/laywer">LAWYER</Link></li>
          <li >
            <Link to="/ngo" className="justify-between">
              NGO
            </Link>

          </li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost normal-case text-3xl  font-bold border-none hover:bg-white ">EnLiven</Link>
    </div>
    <div className="navbar-center hidden lg:flex lg:w-fit lg:h-full">
      <ul className="menu menu-horizontal  border-black h-full border-x">
        <li className=' border-black h-full border-x '><Link to="/lawyer" className='px-10  active:bg-yellow-200 hover:bg-yellow-100 '>LAWYER</Link></li>
        <li className=' border-black h-full border-x '><Link to="/ngo" className='px-10  active:bg-yellow-200 hover:bg-yellow-100 '>NGO</Link></li>
        <li className=' border-black h-full border-x '><Link to="/blog" className='px-10  active:bg-yellow-200 hover:bg-yellow-100 '>BLOG</Link></li>
        <li className=' border-black h-full border-x '><Link to="/contact" className='px-10  active:bg-yellow-200 hover:bg-yellow-100 '>CONTACT US</Link></li> 
      </ul>
    </div>
    <div className="navbar-end hidden sm:flex  lg:w-fit h-full text-center text-lg">
      <Link to="/" className="h-full  w-full py-8 px-10 text-black bg-[#FFF7B2]    active:bg-[#fbef83]">Get started</Link>
    </div>
  </div>
  )
}

//illuisionPrison

export default Navbar