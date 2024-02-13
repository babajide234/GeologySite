import Container from './Container'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className=" bg-gray-50">
        <Container>
            <div className=" flex flex-col w-full">
                <div className="w-full flex flex-col md:flex-row gap-10 justify-between items-start border-b py-10 md:py-20">
                    <div className="">
                        <h2 className=' font-bold text-3xl text-black'>Logo</h2>
                    </div>
                    <div className="flex items-start justify-between gap-10">
                        <div className="flex flex-col gap-5">
                            <h3 className=" font-semibold text-base">About Us</h3>
                            <ul className=" flex flex-col gap-2">
                                <li className=" text-sm capitalize ">Services</li>
                                <li className=" text-sm capitalize ">Contact Us</li>
                                <li className=" text-sm capitalize ">FAQS</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className=" font-semibold text-base">Partners</h3>
                            <ul className=" flex flex-col gap-2">
                                <li className=" text-sm capitalize ">Investors</li>
                                <li className=" text-sm capitalize ">Careers</li>
                                <li className=" text-sm capitalize ">Resources</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className=" font-semibold text-base">Support</h3>
                            <ul className=" flex flex-col gap-2">
                                <li className=" text-sm capitalize ">terms</li>
                                <li className=" text-sm capitalize ">privacy</li>
                                <li className=" text-sm capitalize ">cookies</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <h3 className="">Subscribe For Newsletter</h3>
                        <label htmlFor='emailNewsletter' className=" w-full md:w-[30rem] flex  border focus-within:border-gray-600 border-gray-200 rounded overflow-hidden">
                            <span className="sr-only">email</span>
                            <input type="text" name='emailNewsletter' id='emailNewsletter' className=" flex-grow h-full border-none outline-none p-2.5" placeholder='Enter email address' />
                        </label>
                        <button className=" bg-black px-4 py-2.5 text-base font-semibold  text-white rounded">Subscribe</button>
                    </div>
                </div>
                <div className=" py-20 flex justify-between">
                    <div className="">
                        <ul className="flex gap-5">
                            <li className=" capitalize text-sm ">Terms of Service</li>
                            <li className=" capitalize text-sm underline">Cookies settings</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="flex gap-3">
                            <li className=" w-5 h-5 "><SocialIcon url="https://x.com" style={{ height: 25, width: 25 }}/></li>
                            <li className=" w-5 h-5 "><SocialIcon url="https://www.linkedin.com/" style={{ height: 25, width: 25 }}/></li>
                            <li className=" w-5 h-5 "><SocialIcon url="https://facebook.com" style={{ height: 25, width: 25 }}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer