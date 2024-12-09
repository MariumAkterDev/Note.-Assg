import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './Layouts/LayoutOne'
import Homeinitial from './Components/Homeinitial/Homeinitial'
import LogIn from './Components/LogIn/LogIn'
import SignUp from './Components/SignUp/SignUp'
import LayoutTwo from './Layouts/LayoutTwo'
import LayoutThree from './Layouts/LayoutThree'
import NoteHome from './Pages/NoteHome'
import NotFound from './Pages/NotFound'
import app from './Firebase.config'
import { ToastContainer } from 'react-toastify'


function App() {
  const myPath = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* ================ LayoutOne ===================  */}
        <Route path={'/'} element={<LayoutOne/>} >
          <Route index element={<Homeinitial/>} />
          <Route path='/*' element={<NotFound/>} />
        </Route>
        {/* =============== LayoutTwo ==================== */}
        <Route path='/LayoutTwo' element={<LayoutTwo/>} >
          <Route index element={<LogIn/>} />
          <Route path='/LayoutTwo/SignUp' element={<SignUp/>} />
        </Route>
        {/* =============== LayoutThree ================== */}
        <Route path='/LayoutThree' element={<LayoutThree/>} >
          <Route index element={<NoteHome/>}  />
        </Route>
      </Route>
    )
  )

  return (
    <>
       <RouterProvider router={myPath} />
       <ToastContainer />
    </>
  )
}

export default App
