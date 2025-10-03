import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './routes/Home'
import Search from './routes/Search'
import Movies from './routes/Movies'
import About from './routes/About'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/about' element={<About />} />
      
      </Routes>

    </div>
  )
}

export default App