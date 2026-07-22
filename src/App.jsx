import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import SearchCategory from './components/SearchCategory'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-[#F7F2EC] scroll-smooth'>
      <Navbar />
      
      {/* Har section ki unique ID di gayi hai */}
      <section id="home">
        <Hero />
      </section>

      <section id="products">
        <SearchCategory />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App