import React from 'react'
import Menubar from './components/Menubar/Menubar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/ContactUs/Contact'
import Explorefood from './pages/Explorefood/Explorefood'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div>
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explorefood/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
