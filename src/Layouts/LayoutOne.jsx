import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
  return (
    <>
        <div className='w-full h-[100vh] bg-brandColor '>
          <Navbar/>
          <Outlet/>
        </div>
        
    </>
  )
}

export default LayoutOne