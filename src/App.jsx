import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import ViewCart from './pages/ViewCart'
import Header from './components/Header'
import "./index.css"
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/viewcart' element={<ViewCart/>}></Route>
    </Routes>
    
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App