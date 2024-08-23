import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt="" />
    <p>DIVA ATTIRE</p></div>
    <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
    <ul  ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to= "/" style={{ textDecoration: 'none'}}>Shop</Link>{menu==="shop"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to= "/mens">Men</Link>{menu==="mens"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to= "/womens">Women</Link>{menu==="womens"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link  style={{ textDecoration: 'none'}} to = "/kids">Kids</Link>{menu==="kids"? <hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
           <Link to="/login">  <button>Login</button> </Link>
       <Link to= "/cart">   <img src={cart_icon} alt=" "/></Link>  
    <div className='nav-cart-count'>{getTotalCartItems()}</div>

            </div>
            </div>
  )

  }
export default Navbar