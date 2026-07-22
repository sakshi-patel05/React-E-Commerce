import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import SearchCategory from './components/SearchCategory'
import Footer from './components/Footer'
import Products from './components/Products'
import { Routes, Route, Outlet, useLocation } from 'react-router'
import Home from './pages/Home'
import ProductsDetails from './components/ProductsDetails'

// Ek chota component jo check karega ki footer dikhana hai ya nahi
const LayoutWithFooter = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <div className='min-h-screen bg-[#F7F2EC] scroll-smooth'>
      <Navbar />

      <Routes>
        {/* In sabhi pages ke sath Footer dikhega */}
        <Route element={<LayoutWithFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path='/categories' element={<Outlet/>}>
            <Route index element={<SearchCategory/>}/>
          </Route>
        </Route>

        {/* ke sath Footer nahi dikhega */}
        <Route path='/categories/:id' element={<ProductsDetails />} />
      </Routes>
    </div>
  )
}

export default App