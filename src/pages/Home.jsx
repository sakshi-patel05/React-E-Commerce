import React from 'react'
import SearchCategory from '../components/SearchCategory'
import Products from '../components/Products'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <>   
            <Hero/>
            <SearchCategory />
            <Products />
            <About />
            <Contact />
        </>
    )
}

export default Home
