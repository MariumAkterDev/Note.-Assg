import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import MainNav from '../Components/MainNav/MainNav'
import { useSelector } from 'react-redux'
import SideNav from '../Components/SideNav/SideNav'
import NoteHome from '../Pages/NoteHome'

const LayoutThree = () => {
  // ======================= taking Data from Redux
  const sliceUser = useSelector((state)=>state.currentUser.value)
  const navigate = useNavigate()

  useEffect(()=>{
    if(sliceUser == null){
      navigate('/LayoutTwo')
    }
  },[])


  return (
    <>
        <MainNav/>
        <div className='flex'>
          <SideNav/>
          <Outlet/>
        </div>
        
    </>
  )
}

export default LayoutThree