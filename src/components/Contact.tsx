import React from 'react'
import Container from './Container'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id='contact' className="min-h-screen py-10 md:py-20">
        <Container>
            <div className=" flex flex-col gap-10">
                <div className="flex md:flex-row flex-col gap-10 items-start justify-between">
                    <div className="flex flex-col gap-3">
                        <h2 className=" text-base text-gray-500 ">Invest</h2>
                        <h2 className=" font-bold text-3xl">Get in Touch</h2>
                        <p className="text-base text-gray-500 ">We would love to hear from you. Contact us for any inquiries or investment opportunities.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-start gap-3">
                            <Mail />
                            <div className="">
                                <h3 className="capitalize font-bold text-lg">email</h3>
                                <p className=" underline text-base text-gray-500 ">info@geologyinvest.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                        <Phone />
                            <div className="">
                                <h3 className="capitalize font-bold text-lg">phone</h3>
                                <p className=" underline text-base text-gray-500 ">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                        <MapPin />
                            <div className="">
                                <h3 className="capitalize font-bold text-lg">office</h3>
                                <p className=" underline text-base text-gray-500 ">123 Geology St, Sydney NSW 2000, Australia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className=" h-[30rem] w-full bg-gray-400 block object-cover">
                        <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Google, 8th Avenue, New York, NY, USA&t=&z=14&ie=UTF8&iwloc=B&output=embed" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contact