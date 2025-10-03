import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './routes/Home'
import Search from './routes/Search'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
      
      </Routes>

    </div>
  )
}

export default App