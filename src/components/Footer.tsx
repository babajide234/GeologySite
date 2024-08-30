import { useState } from 'react';
import Container from './Container'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { F, L, Logo, XSM } from '../assets';
const Footer = () => {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        // Replace this commented section with your actual subscription logic
        // It should handle sending the email address to your backend for subscription
    
        // try {
        //   const response = await fetch("/api/subscribe", {
        //     method: "POST",
        //     body: JSON.stringify({ email }),
        //     headers: { "Content-Type": "application/json" },
        //   });
    
        //   if (response.ok) {
        //     toast.success("Successfully subscribed!");
        //     setEmail(""); // Clear the email input after successful subscription
        //   } else {
        //     toast.error("Subscription failed. Please try again later.");
        //   }
        // } catch (error) {
        //   toast.error("An error occurred. Please try again later.");
        // }
    
        // Example Toast Usage (comment out the above commented section if using real logic)
        toast.success("");
    
        // Remember to replace the example toast notification with your success/error messages based on your actual subscription logic
    };

    return (
    <footer className=" bg-gray-50">
        <Container>
            <div className=" flex flex-col w-full">
                <div className="w-full flex flex-col md:flex-row gap-10 justify-between items-start border-b py-10 md:py-20">
                    <div className="">
                        {/* <h2 className=' font-bold text-3xl text-black'>Logo</h2> */}
                        <img src={Logo} alt="" className=" w-[9rem]" />
                    </div>
                    <div className="flex items-start justify-between gap-10">
                        <div className="flex flex-col gap-5">
                            <h3 className=" font-semibold text-base">About Us</h3>
                            <ul className=" flex flex-col gap-2">
                                <li className=" text-sm capitalize hover:cursor-pointer "> 
                                    <ScrollLink 
                                        to="services" 
                                        smooth={true} 
                                        duration={500}
                                    >Services</ScrollLink> 
                                </li>
                                <li className=" text-sm capitalize hover:cursor-pointer ">
                                    <ScrollLink 
                                        to="contact" 
                                        smooth={true} 
                                        duration={500}
                                    >Contact Us</ScrollLink> 
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className=" font-semibold text-base">Support</h3>
                            <ul className=" flex flex-col gap-2">
                                <li className=" text-sm capitalize "><Link to={'/terms'}>terms</Link> </li>
                                <li className=" text-sm capitalize "><Link to={'/privacy'}>privacy</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>

                    <div className=" md:w-[30rem] flex flex-col gap-5 w-full">
                        <h3 className="">Subscribe For Newsletter</h3>
                        <label htmlFor='emailNewsletter' className=" w-full md:w-[30rem] flex  border focus-within:border-gray-600 border-gray-200 rounded overflow-hidden">
                            <span className="sr-only">email</span>
                            <input
                                type="text"
                                name="emailNewsletter"
                                id="emailNewsletter"
                                className="flex-grow h-full border-none outline-none p-2.5"
                                placeholder="Enter email address"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button
                            className="bg-black px-4 py-2.5 text-base font-semibold text-white rounded"
                            type='submit'
                        >
                            Subscribe
                        </button>
                    </div>
                    </form>
                </div>
                <div className=" py-20 flex justify-between">
                    <div className="">
                        <ul className="flex gap-5">
                            <li className="capitalize text-sm">© BRCGEOLOGISTICS LMT {year}</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="flex gap-3">
                            <li className=" w-5 h-5 "><img src={XSM} alt="" className="" /></li>
                            <li className=" w-5 h-5 "><img src={L} alt="" className="" /></li>
                            <li className=" w-5 h-5 "><img src={F} alt="" className="" /></li>
                          
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer