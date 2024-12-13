import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoIosHome } from "react-icons/io";


const Navbar = () => {
 // ======================= taking Data from Redux
 const sliceUser = useSelector((state)=>state.currentUser.value)
 const navigate = useNavigate()

//  ==================== Home Button function

  const handleHome = ()=>{
    if(sliceUser == null){
      navigate('/LayoutTwo')
    }else{
      navigate('/LayoutThree')
    }
  }


  return (
    <>
      <div className="main_dis">
        <div className="container">
          <div className="menu_row">
            <div className="logoCol">
              <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>
            </div>
            <div className="home">
              <div onClick={handleHome} className='nav_Home'><IoIosHome /></div>
            </div>
            <div className="menuBtnCol">
              <button className='login text-red-500'><Link to="/LayoutTwo">Log In</Link></button>
              <button className='signup'><Link to="/LayoutTwo/SignUp" >Sign Up</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar