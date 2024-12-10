import React from 'react'
import './SideNav.css'
import { NavLink } from 'react-router-dom';
import { FaPenToSquare } from "react-icons/fa6";
import { BsPinAngleFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";


const SideNav = () => {
  return (
    <>
      <nav className="sideNav">
        <h2>All Notes</h2>
        <ul>
          <li>
            <NavLink
              to="/LayoutThree/AllNote"
              className={({ isActive }) =>[ isActive ? "activePage" : "notActivePage", ].join(" ")
              }
            >
             <span className='noteIcon'><FaPenToSquare /></span> All Notes
            </NavLink>

            <NavLink
              to="/LayoutThree/PinNote"
              className={({ isActive }) =>[ isActive ? "activePage" : "notActivePage", ].join(" ")
              }
            >
             <span className='pinIcon'><BsPinAngleFill /></span> Pin Notes
            </NavLink>

            <NavLink
              to="/LayoutThree/BinNote"
              className={({ isActive }) =>[ isActive ? "activePage" : "notActivePage", ].join(" ")
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