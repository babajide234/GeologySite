// import { IMG3, IMG4, IMG5, IMG6, IMG7, IMG8 } from '../assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from 'react-router-dom';
import Video from '../assets/construction_video.mp4';
// import { Link as ScrollLink } from 'react-scroll'; 
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {

  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline().from(".header", {
      y: -100,
      opacity:0,
      duration: 2,
      ease: "elastic.out(1,0.3)",
      delay:1
    });

    gsap.timeline().from(".subtext", {
      y: -100,
      opacity:0,
      duration: 1,
      ease: "elastic.out(1,0.3)",
      delay:2
    });

    gsap.timeline().from(".btncontainer", {
      y: -100,
      opacity:0,
      duration: 1,
      ease: "elastic.out(1,0.3)",
      delay:2.5
    });

    gsap.timeline().from(".showIn", {
      opacity:0,
      duration: 2,
      delay:3
    });
  });

  return (
    <div className="  w-full bg-black  bg-blend-overlay px-5 md:px-10 md:mb-[20rem] flex items-center justify-center h-[60vh] md:h-screen relative ">
        <video src={Video} autoPlay loop muted className='  absolute top-0 left-0'/>
        <div className=" w-[700px]  flex justify-center flex-col gap-10 items-center">
            <h1 className="header text-white text-[35px]  md:text-[75px] text-center leading-none font-bold ">
              Explore the Depths of Geology
            </h1>
            <p className="subtext text-white text-center text-base md:text-xl">Uncover the Earth's secrets and shape the future of our planet.</p>
            
            <div

            className="btncontainer w-full md:w-fit flex flex-col md:flex-row  gap-2 md:gap-5">
                <ScrollLink 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  className="border-2 hover:cursor-pointer bg-purple-500 text-white w-full md:w-fit px-5 py-2 focus:outline-none rounded-full">
                  Learn More
                </ScrollLink>
            </div>
        </div>
        
    </div>
  )
}

export default Hero