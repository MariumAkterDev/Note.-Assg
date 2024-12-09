import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../Components/MainNav/MainNav'

const LayoutThree = () => {
  return (
    <>
        <MainNav/>
        <Outlet/>
    </>
  )
}

export default LayoutThree