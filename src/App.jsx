import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import SearchCategory from './components/SearchCategory'
import Footer from './components/Footer'
import Products from './components/Products'
import { Routes ,Route } from 'react-router'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='min-h-screen bg-[#F7F2EC] scroll-smooth'>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<SearchCategory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={ <Contact />} />


      </Routes>
    <Footer />  
    </div>
  )
}

export default App