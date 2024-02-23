import { Menu } from "lucide-react"
import {  AnimatePresence, motion } from 'framer-motion';
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const mobileHandleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu()
  };
  return (
    <div className=" w-full flex items-center justify-between relative  px-5 h-20 md:px-10 md:h-20  md:border-b border-gray-300">
        <nav className=" flex items-center gap-10 h-full">
          <h2 className=' font-bold text-2xl md:text-3xl text-black'>Logo</h2>
          <ul className=" items-center h-full hidden md:flex">
            
            <motion.li onClick={() => handleClickScroll("")} whileTap={{ scale: 0.86 }} className="  outline-none capitalize text-sm text-black px-2.5 h-full flex items-center  hover:bg-slate-50"><Link to={'/'} >Home</Link></motion.li>
            <motion.li onClick={() => handleClickScroll("about")} whileTap={{ scale: 0.86 }} className="  outline-none capitalize text-sm text-black px-2.5 h-full flex items-center  hover:bg-slate-50"><Link to={'/#about'} >About Us</Link> </motion.li>
            <motion.li onClick={() => handleClickScroll("services")} whileTap={{ scale: 0.86 }} className="  outline-none capitalize text-sm text-black px-2.5 h-full flex items-center  hover:bg-slate-50"><Link to={'/#service'} >Services</Link></motion.li>
            <motion.li onClick={() => handleClickScroll("contact")} whileTap={{ scale: 0.86 }} className="  outline-none capitalize text-sm text-black px-2.5 h-full flex items-center hover:bg-slate-50"><Link to={'/equipment'} >Equipments</Link></motion.li>
            <motion.li onClick={() => handleClickScroll("contact")} whileTap={{ scale: 0.86 }} className="  outline-none capitalize text-sm text-black px-2.5 h-full flex items-center hover:bg-slate-50"><Link to={'/#contact'} >Contact</Link></motion.li>
          </ul>
        </nav>
        <div className="hidden md:flex gap-5 items-center">

          {/* <Link to={''} className=" border-2 border-light text-light w-full md:w-fit px-5 py-2 focus:outline-none rounded-full">Learn More</Link> */}
          <Link onClick={() => handleClickScroll("contact")} to={'/'} className="bg-light text-white w-full md:w-fit px-5 py-2 focus:outline-none rounded-full">Contact Us</Link>
        </div>
        <motion.span 
          whileTap={{ scale: 0.85 }}
          onClick={toggleMenu}
         className="p-2 w-fit md:hidden flex items-center justify-center rounded-md bg-gray-50">
          <Menu/>
        </motion.span>
        <AnimatePresence>
          {menuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className=" fixed shadow-md bg-white h-screen w-full left-0 top-0 z-50 py-8 px-5"
          >
              <span className="text-black text-3xl absolute right-6 top-5" onClick={toggleMenu}>
                <CgClose/>
              </span>
              <nav className=" text-center flex w-full h-[80%] items-center justify-center">
                <ul className=" flex flex-col gap-5">
                  <motion.li onClick={() => mobileHandleClickScroll("")} whileTap={{ scale: 0.86 }} className=" text-3xl  font-bold "><Link to={'/'} >Home</Link></motion.li>
                  <motion.li onClick={() => mobileHandleClickScroll("about")} whileTap={{ scale: 0.86 }} className=" text-3xl  font-bold "><Link to={'/'} >About Us</Link> </motion.li>
                  <motion.li onClick={() => mobileHandleClickScroll("services")} whileTap={{ scale: 0.86 }} className=" text-3xl  font-bold "><Link to={'/'} >Services</Link></motion.li>
                  <motion.li onClick={() => mobileHandleClickScroll("")} whileTap={{ scale: 0.86 }} className="  text-3xl  font-bold "><Link to={'/equipment'} >Equipments</Link></motion.li>
                  <motion.li onClick={() => mobileHandleClickScroll("contact")} whileTap={{ scale: 0.86 }} className=" text-3xl  font-bold "><Link to={'/'} >Contact</Link></motion.li>
                </ul>
              </nav>
          </motion.div>
          )}
        </AnimatePresence>

    </div>
  )
}

export default Navbar