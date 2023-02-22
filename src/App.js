import React from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Shop from './components/Shop';
import Services from './components/Services';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Register from './components/Register';



export default function App() {
  return (
    <>
    <Navbar />  
    <Routes>
      <Route path='/' element= {<Body />}/>
      <Route path='/shop' element= {<Shop />}/>
      <Route path='/login' element= {<Login />}/>
      <Route path='/services' element= {<Services />}/>
      <Route path='/cart' element= {<Cart />}/>
      <Route path='/contact' element= {<Contact />}/>
      <Route path='/register' element= {<Register />}/>
    </Routes>
    <Footer/>
    </>
  )
} 

