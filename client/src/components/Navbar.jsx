import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
function Navbar() {
  return (
   <>
   <ul className={style.nav}>
   <h1 style={{marginRight:'400px',color:'plum'}}>BizPro</h1>
    <li>
        <Link style={{color:'purple',textDecoration:'none'}} to='/'>HOME</Link>
    </li>
    <li>ABOUT</li>
    <li>SERVICES</li>
    <li>PORTFOLIO</li>
    <li>TEAM</li>
    <li>SKILL</li>
    <li>CLIENTS</li>
    <li>PRICING</li>
    <li>BLOG</li>
    <li>CONTACT</li>
   </ul>
   
   </>
  )
}

export default Navbar