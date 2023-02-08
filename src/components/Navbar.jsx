import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-white text-black h-fit p-0 min-h-0 lg:flex lg:justify-between lg:h-[10vh]">
    <div className="navbar-start h-full lg:w-fit w-full">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-white rounded-box w-52">
          <li><a>Item 1</a></li>
          <li >
            <a className="justify-between">
              Item 2
            </a>

          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-3xl  font-bold  ">EnLiven</a>
    </div>
    <div className="navbar-center hidden lg:flex lg:w-fit lg:h-full lg:font-    ">
      <ul className="menu menu-horizontal  border-black h-full border-x">
        <li className=' border-black h-full border-x '><a className='px-10  active:bg-black hover:bg-yellow-100 '>Itewqwm 1</a></li>
        <li className=' border-black h-full border-x '><a className='px-10  active:bg-black hover:bg-yellow-100 '>Iteasdasdsam 1</a></li>
        <li className=' border-black h-full border-x '><a className='px-10  active:bg-black hover:bg-yellow-100 '>Iasdasdtem 1</a></li>
        <li className=' border-black h-full border-x '><a className='px-10  active:bg-black hover:bg-yellow-100 '>Itasdem 1</a></li> 
      </ul>
    </div>
    <div className="navbar-end hidden sm:flex pr-2 lg:w-fit ">
      <a className="btn text-black bg-[#FFF7B2]">Get started</a>
    </div>
  </div>
  )
}

//illuisionPrison

export default Navbar