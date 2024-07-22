import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
   {/*header*/}
  {/* 
<header className="main-header clearfix" role="header">
  <div className="logo">
    <a href="#"><em>Bridge </em>the Gap</a>
  </div>
  <a href="#menu" className="menu-link"><i className="fa fa-bars" /></a>
  <nav id="menu" className="main-nav" role="navigation">
    <ul className="main-menu">
      <li><a href="#section1">Home</a></li>
      <li className="has-submenu"><a href="#section2">About Us</a>
        <ul className="sub-menu">
          <li><a href="#section2">Who we are?</a></li>
          <li><a href="#section3">What we do?</a></li>
          <li><a href="#section3">How it works?</a></li>
          <li><a href="https://templatemo.com/about" rel="sponsored" className="external">External URL</a></li>
        </ul>
      </li>
      <li><a href="#section4">Courses</a></li>

      <li><a href="#section6">Contact</a></li>
      <li><a href="https://templatemo.com" className="external">External</a></li>
    </ul>
  </nav>
</header>
*/}

<header className='bg-white p-4  flex justify-between items-center h-20'>
  <h1 className='text-4xl font-bold'><span className='text-header'>BRIDGE</span> THE GAP</h1>

  <div>
    <nav className='flex justify-center gap-5 px-2'>
     <Link to='/' className='no-underline font-semibold text-black '><a >Home</a> </Link>
     <Link to='/digital-skills' className='no-underline font-semibold text-black'><a >Courses</a></Link>
     <Link to='/institutions' className='no-underline font-semibold text-black'><a>Institutions</a></Link>
     <Link to='/sign-up' className='no-underline font-semibold text-black'><a>Sign up</a></Link>
    </nav>
  </div>
</header>
    </>
  )
}
