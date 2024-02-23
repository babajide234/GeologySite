import Container from './Container'
import { IMG1 } from '../assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const About = () => {
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger) 

        // gsap.from(".leftToRight",{
        //     scrollTrigger:{
        //         trigger:"section",
        //         toggleActions:'play none none none',
        //     },
        //     once:true,
        //     x:-100,
        //     opacity:0,
        //     duration:2,
        // })
        // gsap.from(".RightToLeft",{
        //     scrollTrigger:{
        //         trigger:"section",
        //         toggleActions:'play none none none',
        //     },
        //     x:100,
        //     opacity:0,
        //     duration:2
        // })
    })
  return (
    <section id='about' className=" mt-[17rem] md:mt-0 py-10 md:py-20 ">
        <Container>
            <div className=" flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-10 ">
                <div className=" leftToRight relative">
                    <div className=" w-[15rem] mx-auto  md:w-full md:h-[70vh] h-[15rem] border-[1rem] md:border-[1.3rem] border-white  overflow-hidden group bg-cover bg-center before:absolute before:w-[5rem] before:h-[5rem] md:before:w-[15rem] md:before:h-[15rem] before:border-[1rem] md:before:border-[1.3rem] before:border-light before:-bottom-8 before:right-5 md:before:-bottom-10 md:before:-right-10 before:-z-10
                        after:absolute after:w-[5rem] after:h-[5rem] md:after:w-[15rem] md:after:h-[15rem] after:border-[1rem] md:after:border-[1.3rem] after:border-light after:-top-8 after:left-8 md:after:-top-10 md:after:-left-10 after:-z-10
                    " style={{backgroundImage:`url(${IMG1})`}}>
                    </div>
                </div>
                <div className="RightToLeft flex flex-col px-5 md:px-20 mt-5 md:mt-0 gap h-full justify-center text-center items-center">
                    <h3 className=" text-sm  uppercase leading-loose text-gray-400 flex w-fit pb-2">About Us</h3>
                    <h3 className=" text-3xl leading-tight font-bold flex w-fit pb-2 mb-5">About Our Company</h3>
                    <p className="  text-xs md:text-sm mb-5 text-gray-500 "> BRC Geologist Limited Invest in the future with our geology-focused platform. Explore opportunities, track performance, and make informed decisions.</p>
                   
                    <Link to="/about-ceo" className=' bg-light py-2.5 px-10 rounded-full w-fit text-white font-semibold flex items-center gap-3 transition-all ease-in-out hover:gap-5 '>Learn more <ArrowRight/></Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About