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


    const data = [
        {
          src: "Gold",
          title: "Invest in Gold Mining",
          subtitle: "Gold Mining Investment",
          description: "Explore investment opportunities in gold mining with BRC Geologist Limited. We provide expert analysis and strategic insights to maximize returns.",
          image: Gold
        },
        {
          src: "Equipment",
          title: "Lease or Purchase Machines",
          subtitle: "Machine Leasing and Purchase",
          description: "BRC Geologist Limited offers flexible options for machine leasing and purchase. Get access to top-quality equipment for your mining operations.",
          image: Equipment
        },
        {
          src: "Survey",
          title: "Expert Geological Analysis",
          subtitle: "Geological Surveys and Analysis.",
          description: "Benefit from our specialized geological surveys and analysis services. Our team of experts provides comprehensive insights to optimize your mining operations.",
          image: Survey
        }
      ];
      
  return (
    <section id='services' className=" py-5 md:py-20 ">
        <Container>
            
            <div className=" text-center flex items-center py-10 flex-col px-5 md:px-20">
                <h3 className="text-sm uppercase leading-loose text-gray-400 flex w-fit pb-2 fadeInPop">Services</h3>
                <h3 className="text-3xl leading-tight font-bold flex w-fit pb-2 mb-5 fadeInPop">Our Services</h3>
                <p className="text-sm md:text-sm mb-5 text-gray-500 fadeInPop">At BRC Company, we pride ourselves on providing a wide range of services tailored to meet the diverse needs of our clients. From innovative solutions in technology to comprehensive consulting services, we're dedicated to delivering excellence in every aspect of our work. Explore our offerings and discover how we can help you achieve your goals.</p>
            </div>
           <div className=" grid grid-cols-1 h-full md:grid-cols-3 gap-5 ">
                {data.map((service,index)=>(
                    <div className=" w-full min-h-[20rem]  md:py-10" key={index} >
                        <img src={service.image} alt="" className="w-[15rem] h-[15rem] border-8 mx-auto shadow-lg border-solid border-gray-100 rounded-full" />
                        <div className=" w-full text-center flex justify-center flex-col items-center py-10 px-10  ">
                            <h3 className="text-xs uppercase leading-loose text-purple-700 font-bold flex w-fit pb-2">{service.title}</h3>
                            <h3 className="text-md leading-tight font-bold flex w-fit pb-2 ">{service.subtitle}</h3>
                            <p className="text-sm md:text-xs mb-5 text-gray-500">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </Container>
    </section>
  )
}

export default Services