import Container from "../components/Container"
import {IMG6,CEO } from '../assets'
import {  Mail, MapPin, PhoneCall } from "lucide-react"

const CeoPage = () => {
  return (
    <>
        <section className=" w-full bg-black/60 bg-center bg-blend-overlay bg-cover h-48 md:h-96" style={{ backgroundImage:`url(${IMG6})` }}>
            <Container>
                <div className=" w-full h-full flex justify-center items-center">
                    <h2 className=" font-bold text-2xl md:text-5xl text-white">About The Ceo</h2>
                </div>
            </Container>
        </section>
        <section className=" py-10">
            <Container>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-10">

            <div className=" flex justify-center">
                <img src={CEO} alt="" className=" w-[20rem] md:w-[25rem] h-[25rem] md:h-[30rem] rounded-xl"  />
            </div>
            <div className="">
                <h1 className=" uppercase font-bold text-lg text-gray-300">About The Ceo</h1>
                <h2 className="uppercase font-bold text-2xl text-gray-900">Bill Riccardo Colter</h2>
                <h2 className="uppercase font-bold text-lg text-gray-600 mb-10">CEO</h2>

                <p className=" text-sm text-justify text-gray-600 ">
                    Bill Riccardo Colter, our founder, is an exploration geologist & gemologist who has been closely involved in the mining and exploration industry since 2005, 
                    with significant on-the-ground experience in Australia. Born in Italy and raised in Tanzania, Bill has been immersed in the mining sector for over 35 years. In addition to his extensive knowledge of the Sangihe project, he has implemented his entrepreneurial skills from a series of successful business ventures that include technology, import-export, and human resources.
                    Previously, he was the Managing Director of gold exploration found in Tanzania with operations in Australia. The company exported gold, diamonds, bronze, and sapphires mined from Tanzania to the USA and other countries. They also imported petroleum and energy products into China, including coal, petroleum products, and asphalt used in processing the raw gold.
                    Bill supervised logistics, financing, sourcing, and business development. He was also the Managing Director of Borneo Resource Investment Ltd., a publicly listed (“BRNE”) American mining company that mined gold and developed producing gold mines in Australia.
                    He was responsible for all management of the company’s business, which included building a new mining team, acquiring properties for production, developing those properties for production, legal set-up for Indonesia, business planning and development, financial management and controls, and government and police liaison for mining and company assets. Bill developed a 5,000 ton gold ore production pad heap leach operation in the Australian area with the mandate to expand the operation to 35,000 tons total, gold ore production pads, heap leach operation.
                </p>
                <div className="py-10 flex flex-col gap-3">
                    <ul className=" flex gap-5 text-sm items-center "> <span className=" text-purple-500"><MapPin/> </span> 201 Spear St, San Francisco, CA 94105, USA </ul>
                    <ul className=" flex gap-5 text-sm items-center "> <span className=" text-purple-500"><MapPin/> </span>  1 O'Connell St, Sydney NSW 2000 </ul>
                    <ul className=" flex gap-5 text-sm items-center "> <span className=" text-purple-500"><PhoneCall/></span>   510 224 2927 </ul>
                    <ul className=" flex gap-5 text-sm items-center "> <span className=" text-purple-500"><Mail/></span>  bill.riccardo.colter@brcgeologist.com</ul>
                </div>
            </div>
            </div>
            </Container>
        </section>
    </>
  )
}

export default CeoPage