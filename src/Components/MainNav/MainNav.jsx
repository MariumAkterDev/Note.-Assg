import React, { useState } from 'react'
import './MainNav.css'
import { Link, useNavigate } from 'react-router-dom'
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../Slice/counterSlice';
import myLogo from '../../../public/images/logo.png'



const MainNav = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  // ======================= usestate for dropdown
  const [show, setShow] = useState(false);
  // ======================= taking Data from Redux
  const sliceUser = useSelector((state)=>state.currentUser.value)
  // ============================== Logout function
  const handleLogOut = ()=>{
    navigate('/')
    localStorage.removeItem('userProfile')
    dispatch(userData(null))

  }



  return (
    <>
      <div className="main_dis">
        <div className="container">
          <div className="menu_row !pb-[30px]">
            <div className="logoCol">
              <Link to="/">
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="menuDp">
              <div className="menuEnd">
                <div className="profileImg" onClick={() => setShow(!show)}>
                  <img src={sliceUser?.photoURL} alt="" />
                </div>
                <h3 className="userName">{sliceUser?.displayName}</h3>
              </div>
              {show ? (
                <button className="logOut" onClick={handleLogOut}>
                  <div className="logoutCard">
                    <div className="logout_icon">
                      <VscSignOut />
                    </div>
                    <h6>Log Out</h6>
                  </div>
                </button>
              ) 
              : 
              (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNav