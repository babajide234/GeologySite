import React from 'react'
import Container from './Container'
import { IMG1 } from '../assets'

const About = () => {
  return (
    <section id='aboutUs' className=" py-10 md:py-20 ">
        <Container>
            <div className=" flex flex-col-reverse md:grid md:grid-cols-2 gap-10 ">
                <div className="">
                    <div className=" w-full md:h-[30rem] h-[20rem] bg-slate-100 overflow-hidden group ">
                        <img src={IMG1} alt="" className=" object-cover h-full" />
                    </div>
                </div>
                {/* <div className="flex flex-col gap-5 h-full justify-center">
                    <h2 className=" text-5xl font-bold">BRC Geologist Limited</h2>
                    <p className=" text-sm">Invest in the future with our geology-focused platform. Explore opportunities, track performance, and make informed decisions.</p>
                    <div className=" flex gap-5">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-bold">Investment Solutions</h2>
                            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, ipsum assumenda sunt nisi </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl font-bold">Expert Guidance.</h2>
                            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, ipsum assumenda sunt nisi beatae ut esse atque vel </p>
                        </div>
                    </div>
                </div> */}
                <div className="flex flex-col gap-5 h-full justify-center">
                    <h2 className=" text-3xl md:text-5xl font-bold">BRC Geologist Limited</h2>
                    <p className="  text-xs md:text-sm">Invest in the future with our geology-focused platform. Explore opportunities, track performance, and make informed decisions.</p>
                    <div className="">
                        <div className=" border-r-2 border-black py-2.5 text-black">
                            <h2 className=" text-md md:text-xl font-bold">Investment Solutions</h2>
                            <p className="text-xs md:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint pariatur fugit vero temporibus, facilis dolorem recusandae earum repellendus minus ex saepe ullam reiciendis nulla quas nostrum nihil ut voluptate necessitatibus.</p>
                        </div>
                        <div className=" border-r-2 border-gray-400 py-2.5 text-gray-400">
                            <h2 className=" text-md md:text-xl font-bold">Investment Solutions</h2>
                            <p className="text-xs md:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint pariatur fugit vero temporibus, facilis dolorem recusandae earum repellendus minus ex saepe ullam reiciendis nulla quas nostrum nihil ut voluptate necessitatibus.</p>
                        </div>
                        <div className=" border-r-2 border-gray-400 py-2.5 text-gray-400">
                            <h2 className="text-md md:text-xl font-bold">Investment Solutions</h2>
                            <p className="text-xs md:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint pariatur fugit vero temporibus, facilis dolorem recusandae earum repellendus minus ex saepe ullam reiciendis nulla quas nostrum nihil ut voluptate necessitatibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About