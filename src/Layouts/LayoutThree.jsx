import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import MainNav from '../Components/MainNav/MainNav'
import { useSelector } from 'react-redux'

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
        <Outlet/>
    </>
  )
}

export default LayoutThree