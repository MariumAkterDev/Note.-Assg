import React, { useState } from 'react'
import './MainNav.css'
import { Link } from 'react-router-dom'
import { VscSignOut } from "react-icons/vsc";



const MainNav = () => {
  // ======================= usestate for dropdown
  const [show, setShow] = useState(false);




  return (
    <>
      <div className="main_dis">
        <div className="container">
          <div className="menu_row !pb-[30px]">
            <div className="logoCol">
              <Link to="/">
                <img src="images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="menuDp">
              <div className="menuEnd">
                <div className="profileImg" onClick={() => setShow(!show)}></div>
                <h3 className="userName">Lorem, ipsum</h3>
              </div>
              {show ? (
                <button className="logOut">
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