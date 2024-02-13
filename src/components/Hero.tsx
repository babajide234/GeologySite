import { useEffect, useRef } from 'react'
import Buttons from './Buttons'
import { useScroll, useTransform, motion } from 'framer-motion';
import { IMG3, IMG4, IMG5, IMG6, IMG7, IMG8 } from '../assets';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null >(null);
  const Headline = "Explore the Depths of Geology".split(" ");

  const { scrollYProgress } = useScroll({
    target:targetRef
  })

  const x = useTransform(scrollYProgress, [0,1], ["1%","-55%"]);

  useEffect(()=>{
    console.log(x)
  },[x])

  return (
    <div className="w-full px-5 md:px-10 flex items-center justify-center h-[60vh] md:h-[70vh] text-black relative ">
        <div className=" w-[700px]  flex justify-center flex-col gap-10 items-center">
            <h1 className=" text-[35px]  md:text-[65px] text-center leading-none font-bold ">
            {Headline.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
            </h1>
            <p className="text-center text-base">Uncover the Earth's secrets and shape the future of our planet.</p>
            <div className=" w-full md:w-fit flex flex-col md:flex-row  gap-2 md:gap-5">
                <Buttons outline variant="secondary">Learn More</Buttons>
                <Buttons>Sign Up</Buttons>
            </div>
        </div>
        <motion.div  
          ref={targetRef} 
          className=" py-5 w-full absolute md:-bottom-[14rem] -bottom-[9rem] flex gap-3 flex-nowrap no-scrollbar overflow-x-scroll "
        >
            <span className=" w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG3} alt="" className="w-full h-full object-cover" />
            </span>
            <span className=" w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG4} alt="" className="w-full h-full object-cover" />
            </span>
            <span className=" w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG5} alt="" className="w-full h-full object-cover" />
            </span>
            <span className=" w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG6} alt="" className="w-full h-full object-cover" />
            </span>
            <span className=" w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG7} alt="" className="w-full h-full object-cover" />
            </span>
            <span className=" w-[10rem] h-[8rem] md:w-[25rem] md:h-[16rem] bg-gray-200 block flex-shrink-0 overflow-hidden rounded-lg">
              <img src={IMG8} alt="" className="w-full h-full object-cover" />
            </span>
        </motion.div>
    </div>
  )
}

export default Hero