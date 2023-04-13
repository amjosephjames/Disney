import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from './components/Details/Details'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





