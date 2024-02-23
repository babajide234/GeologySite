import Container from './Container'

    
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Equipment, Gold, Survey } from '../assets';

const Services = () => {
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger) 

        const services = gsap.utils.toArray(".services");
        const tl = gsap.timeline();
        
        tl.from(services, {
            scrollTrigger:{
                trigger:"section",
                toggleActions:'play none none none',
            },
            ease: "elastic.out(1,0.8)",
            scale:0,
            opacity:0,
            duration:1,
            stagger:.8,
        });

        // gsap.from(".RightToLeft",{
        //     scrollTrigger:{
        //         trigger:"section",
        //         toggleActions:'play none none none',
        //     },
        //     x:100,
        //     opacity:0,
        //     duration:2
        // })

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

        gsap.from(".fadeInPop",{
            scrollTrigger:{
                trigger:"section",
                toggleActions:'play none none none',
            },
            once:true,
            scale:0,
            opacity:0,
            duration:1,
            stagger:.6
        })

    })
  return (
    <section id='services' className=" py-5 md:py-20">
        <Container>
            
            <div className=" text-center flex items-center py-10 flex-col px-5 md:px-20">
                <h3 className="text-sm uppercase leading-loose text-gray-400 flex w-fit pb-2 fadeInPop">Services</h3>
                <h3 className="text-3xl leading-tight font-bold flex w-fit pb-2 mb-5 fadeInPop">Our Services</h3>
                <p className="text-sm md:text-sm mb-5 text-gray-500 fadeInPop">At BRC Company, we pride ourselves on providing a wide range of services tailored to meet the diverse needs of our clients. From innovative solutions in technology to comprehensive consulting services, we're dedicated to delivering excellence in every aspect of our work. Explore our offerings and discover how we can help you achieve your goals.</p>
            </div>
           <div className="">
                <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full gap-5">
                    <img src={Gold} alt="" className="w-[30rem] rounded-xl fadeInPop" />
                    <div className=" w-full md:w-[30rem] leftToRight relative text-center flex justify-center flex-col items-center">
                        <h3 className="text-sm uppercase leading-loose text-gray-400 flex w-fit pb-2">Gold Mining Investment</h3>
                        <h3 className="text-3xl leading-tight font-bold flex w-fit pb-2 mb-5">Invest in Gold Mining</h3>
                        <p className="text-sm md:text-sm mb-5 text-gray-500">Explore investment opportunities in gold mining with BRC Geologist Limited. We provide expert analysis and strategic insights to maximize returns.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-5">
                    <img src={Equipment} alt="" className="w-[30rem] rounded-xl fadeInPop" />
                    <div className=" w-full md:w-[30rem] RightToLeft relative text-center flex justify-center flex-col items-center">
                        <h3 className="text-sm uppercase leading-loose text-gray-400 flex w-fit pb-2">Machine Leasing and Purchase</h3>
                        <p className="text-sm md:text-sm mb-5 text-gray-500">BRC Geologist Limited offers flexible options for machine leasing and purchase. Get access to top-quality equipment for your mining operations.</p>
                        <h3 className="text-3xl leading-tight font-bold flex w-fit pb-2 mb-5">Lease or Purchase Machines</h3>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse  items-center justify-center w-full gap-5">
                    <img src={Survey} alt="" className="w-[30rem] rounded-xl fadeInPop" />
                    <div className=" w-full md:w-[30rem] leftToRight  relative text-center flex justify-center flex-col items-center">
                        <h3 className="text-sm uppercase leading-loose text-gray-400 flex w-fit pb-2">Geological Surveys and Analysis Services</h3>
                        <h3 className="text-3xl leading-tight font-bold flex w-fit pb-2 mb-5">Expert Geological Analysis</h3>
                        <p className="text-sm md:text-sm mb-5 text-gray-500">Benefit from our specialized geological surveys and analysis services. Our team of experts provides comprehensive insights to optimize your mining operations.</p>
                    </div>
                </div>
            </div>

        </Container>
    </section>
  )
}

export default Services