import React, { useEffect } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();

    useEffect(()=>{
        console.log(location)
    },[location])

  return (
    <>
        <header className={`w-full flex flex-col  `}>
            <Navbar/>
            { location.pathname === "/" && <Hero/>}
        </header>
        <main className="flex flex-col">
            <Outlet/>
        </main>
        <Footer/>
    </>

  )
}

export default Layout