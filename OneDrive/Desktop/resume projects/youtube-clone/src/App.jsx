import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Video from './Pages/Video/video'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
    
    </>
  )
}

export default App