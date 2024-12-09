import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="main_dis">
        <div className="container">
          <div className="menu_row">
            <div className="logoCol">
              <Link to="/"><img src="images/logo.png" alt="Logo" /></Link>
            </div>
            <div className="menuBtnCol">
              <button className='login'><Link to="/LayoutTwo">Log In</Link></button>
              <button className='signup'><Link to="/LayoutTwo/SignUp" >Sign Up</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar