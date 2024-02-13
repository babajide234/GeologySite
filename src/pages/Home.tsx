import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Container from '../components/Container'
import Cta from '../components/CTA'
import Quote from '../components/Quote'
import Services from '../components/Services'

const Home = () => {
  return (
    <>  
      <header className="w-full flex flex-col mb-[10rem] md:max-lg:mb-[30rem] ">
        <Navbar/>
        <Hero/>
      </header>
      <main className="flex flex-col">
          <About/>
          <Cta/>
          <Services/>
          <Quote/>
          <Team/>
          <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default Home