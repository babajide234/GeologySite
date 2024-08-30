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
                                <p className=" underline text-base text-gray-500 ">info@brcgeologist.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin />
                            <div className="">
                                <h3 className="capitalize font-bold text-lg">US office</h3>
                                <p className=" underline text-base text-gray-500 ">201 Spear St, San Francisco, CA 94105, USA</p>
                                <div className=" flex items-center gap-4">
                                    <Phone size={15} />
                                    <p className=" underline text-base text-gray-500 ">+1 510-224-2927 ,+1 510-221-6883</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                        <MapPin />
                            <div className="">
                                <h3 className="capitalize font-bold text-lg">Australia office</h3>
                                <p className=" underline text-base text-gray-500 "> 1 O'Connell St, Sydney NSW 2000</p>
                                <div className=" flex items-center gap-4">
                                    <Phone size={15} />
                                    <p className=" underline text-base text-gray-500 ">+61452105814</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className=" h-[30rem] w-full bg-gray-400 block object-cover">
                        <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Google, 201 Spear St, San Francisco, CA 94105, USA&t=&z=14&ie=UTF8&iwloc=B&output=embed" ></iframe>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contact