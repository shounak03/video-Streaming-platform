import React, { useState } from 'react'
import Home from './Pages/HomePage/Home'

import Nav from './components/Navbar/Nav'
import Video from './Pages/Video/Video'
import { Route, Routes } from 'react-router-dom'
const App = () => {

  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
        <Nav setSidebar={setSidebar}/>
        < Routes>
          <Route path='/' element={<Home sidebar={sidebar}/>}/>
          <Route path='/video/:id/:videoId' element={<Video/>}/>
        </Routes>
    </div>
  )
}

export default App