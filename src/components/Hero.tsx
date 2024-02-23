import { IMG3, IMG4, IMG5, IMG6, IMG7, IMG8 } from '../assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

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

    // const tl = gsap.timeline({ repeat: -1 });
    // const items = document.querySelectorAll(".slide-item");
    // const totalItems = items.length;

    
    const images = gsap.utils.toArray(".hero-container .slide-item");
    const image_de = gsap.utils.toArray(".hero-container .slide-container-2 .slide-item");



    gsap.timeline().to(images,{
      xPercent: -100 * (images.length - 1),
      ease:"none",
      scrollTrigger:{
        trigger: '.hero-container',
        pin:false,
        scrub: 1,
        end: "+=3000"
      }
    })
    gsap.timeline().to(image_de,{
      xPercent: 100 * (image_de.length - 1),
      ease:"none",
      scrollTrigger:{
        trigger: '.hero-container',
        pin:false,
        scrub: 1,
        end: "+=2000"
      }
    })




    

  });

  return (
    <div className="hero-container w-full px-5 md:px-10 md:mb-[20rem] flex items-center justify-center h-[60vh] md:h-[70vh] text-black relative ">
        <div className=" w-[700px]  flex justify-center flex-col gap-10 items-center">
            <h1 className="header text-[35px]  md:text-[75px] text-center leading-none font-bold ">
              Explore the Depths of Geology
            </h1>
            <p className="subtext text-center text-base md:text-xl">Uncover the Earth's secrets and shape the future of our planet.</p>
            
            <div

            className="btncontainer w-full md:w-fit flex flex-col md:flex-row  gap-2 md:gap-5">
                <Link to={''} className=" border-2 border-light text-light w-full md:w-fit px-5 py-2 focus:outline-none rounded-full">Learn More</Link>
                <Link to={''} className="bg-light text-white w-full md:w-fit px-5 py-2 focus:outline-none rounded-full">Contact Us</Link>
            </div>
        </div>
        <div
          className=" slide-container
          showIn  w-full absolute md:-bottom-[14rem] -bottom-[9rem] flex gap-3 flex-nowrap no-scrollbar overflow-x-scroll before:w-64 before:h-full before:bg-gradient-to-l from-transparent to-neutral-200 before:absolute before:left-0 before:top-0
          "
        >
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG3} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG4} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG5} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG6} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG7} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG8} alt="" className="w-full h-full object-cover" />
            </span>
        </div>
        {/* <div
          className=" slide-container-2
          showIn  w-full absolute md:-bottom-[31rem] -bottom-[9rem] flex gap-3 flex-nowrap no-scrollbar overflow-x-scroll before:w-64 before:h-full before:bg-gradient-to-l from-transparent to-neutral-200 before:absolute before:left-0 before:top-0
          "
        >
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG3} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG4} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG5} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG6} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG7} alt="" className="w-full h-full object-cover" />
            </span>
            <span className="slide-item w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG8} alt="" className="w-full h-full object-cover" />
            </span>
        </div> */}
    </div>
  )
}

export default Hero