import React, { useEffect, useState } from 'react'
import './SideNav.css'
import { NavLink } from 'react-router-dom';
import { FaPenToSquare } from "react-icons/fa6";
import { BsPinAngleFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";


const SideNav = () => {
  // ======================= useState for toggle button
  const [toggleValue, setToggleValue] = useState(false);

  // ===================== saving the updated mode in local storage when user toggles  
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light";
    localStorage.setItem("mode", savedMode);
    document
      .querySelector("html")
      .classList.toggle("dark", savedMode === "dark");
  }, []);
  // ===================== changing the mode on toggle
  const handelMode = () => {
    if (localStorage.getItem("mode") == "light") {
      localStorage.setItem("mode", "dark");
      document.querySelector("html").classList.add("dark");
      setToggleValue(!toggleValue);
    } else {
      localStorage.setItem("mode", "light");
      document.querySelector("html").classList.remove("dark");
      setToggleValue(!toggleValue);
    }
  };



  return (
    <>
      <nav className="sideNav dark:bg-[#343434]">
        <div className="sideNavTop">
          <h6 className=''>All Notes</h6>
          {/* ===================> toggle starts */}
          <div className="modeButton">
          {localStorage.getItem("mode") == "light" ? (
            <button className="py-1 px-3 bg-[#343434] text-xl text-[white] rounded-sm" onClick={handelMode}>
              Dark
            </button>
          ) : (
            <button className="py-1 px-3 bg-thirdColor text-[white] rounded-sm text-xl" onClick={handelMode}>
              Light
            </button>
          )}
        </div>
          {/* -----------------X toggle ends */}
        </div>
        <ul>
          <li>
            <NavLink
              to="/LayoutThree/AllNote"
              className={({ isActive }) =>[ isActive ? "activePage" : "notActivePage dark:text-[white]", ].join(" ")
              }
            >
             <span className='noteIcon'><FaPenToSquare /></span> All Notes
            </NavLink>

            <NavLink
              to="/LayoutThree/PinNote"
              className={({ isActive }) =>[ isActive ? "activePage" : "notActivePage dark:text-[white]", ].join(" ")
              }
            >
             <span className='pinIcon'><BsPinAngleFill /></span> Pin Notes
            </NavLink>

            <NavLink
              to="/LayoutThree/BinNote"
              className={({ isActive }) =>[ isActive ? "activePage" : "notActivePage dark:text-[white]", ].join(" ")
              }
            >
             <span className='binIcon'><RiDeleteBin5Fill /></span> Bin
            </NavLink>
          </li>
        </ul>
        
        
      </nav>
    </>
  );
}

export default SideNav